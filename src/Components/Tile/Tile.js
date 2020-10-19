import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  fillHeight: {
    position: "relative",
    display: "inline-block",
    height: "100%",
    width: "18%",
    marginLeft: "5px",
    "&:hover": {
      transform: "scale(1.5)",
      zIndex: theme.zIndex.drawer + 2,
    }
  }
}));

const Tile = (props) => {
  const classes = useStyles();

  return (
    <Paper square elevation={2} className={classes.fillHeight} >{props.children}</Paper>
  );
}

export default Tile;
