import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tile from '../Tile/Tile';

const DRAWER_WIDTH = { EXPANDED: 200, COLLAPSED: 50 };

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
    height: "20%"
  }
}));

const TileList = ({ expanded, title, items }) => {
  const classes = useStyles();

  return (
    <div className={expanded ? classes.contentExpanded : classes.content} >
      <h2 className={classes.title}> {title}</h2>
      { items.map((item, i) => <Tile key={i} >{item}</Tile>)}
    </div>
  );
}

export default TileList;
