import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Tile from '../Tile/Tile';

const DRAWER_WIDTH = { EXPANDED: 200, COLLAPSED: 50 };
const TILES_COUNT = {
  XS: 4,
  DEFAULT: 5
};

const useStyles = makeStyles((theme) => ({
  content: {
    height: "20%",
    overflowY: "visible",
    paddingLeft: "10px",
    marginLeft: DRAWER_WIDTH.EXPANDED,
    marginBottom: "35px",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  contentExpanded: {
    height: "20%",
    overflowY: "visible",
    paddingLeft: "10px",
    marginLeft: DRAWER_WIDTH.COLLAPSED,
    marginBottom: "35px",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  title: {
    height: "20%",
    marginTop: "5px"
  },
  row: {
    display: "inline-flex",
    height: "80%",
    width: "100%",
    "& > *": {
      verticalAlign: "middle"
    }
  },
  items: {
    height: "80%",
    width: "85%",
    display: "inline-block"
  },
  beforeButtonDummy: {
    marginLeft: "48px"
  }
}));

const TileList = ({ expanded, title, items }) => {
  const theme = useTheme();
  const isSmallScreenUp = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  const [state, setState] = React.useState({
    displayIndex: 0
  });
  const getTiles = (tiles) => {
    const index = state.displayIndex;

    return tiles.slice(index, index + (isSmallScreenUp ? TILES_COUNT.DEFAULT : TILES_COUNT.XS));
  };

  return (
    <div className={expanded ? classes.contentExpanded : classes.content} >
      <h2 className={classes.title}> {title}</h2>
      <div className={classes.row}>
        {state.displayIndex - (isSmallScreenUp ? TILES_COUNT.DEFAULT : TILES_COUNT.XS) >= 0 ? <IconButton
          color="primary"
          aria-label="next movies"
          component="span"
          onClick={() => { setState({ displayIndex: state.displayIndex - (isSmallScreenUp ? TILES_COUNT.DEFAULT : TILES_COUNT.XS) }) }} >
          <NavigateBeforeIcon />
        </IconButton> : <div className={classes.beforeButtonDummy} />}

        {/* <div className={classes.items
          + (state.displayIndex - TILES_COUNT < 0 ? " " + classes.beforeButtonDummy : "")}> */}
        {getTiles(items).map((item, i) => <Tile key={i} >{item}</Tile>)}
        {/* </div> */}

        {state.displayIndex + (isSmallScreenUp ? TILES_COUNT.DEFAULT : TILES_COUNT.XS) < items.length ? <IconButton
          color="primary"
          aria-label="next movies"
          component="span"
          onClick={() => { setState({ displayIndex: state.displayIndex + (isSmallScreenUp ? TILES_COUNT.DEFAULT : TILES_COUNT.XS) }) }} >
          <NavigateNextIcon />
        </IconButton> : null}
      </div>
    </div>
  );
}

export default TileList;
