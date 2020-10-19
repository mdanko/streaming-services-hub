import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';

const DRAWER_WIDTH = { EXPANDED: 200, COLLAPSED: 50 };

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: DRAWER_WIDTH.EXPANDED,
    flexShrink: 0,
  },
  drawerCollapsed: {
    width: DRAWER_WIDTH.COLLAPSED,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
    width: DRAWER_WIDTH.EXPANDED,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: 'hidden'
  },
  drawerPaperCollapsed: {
    backgroundColor: theme.palette.primary.main,
    width: DRAWER_WIDTH.COLLAPSED,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden'
  }
}));

const Sidebar = ({ collapsed }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      open
      className={collapsed ? classes.drawerCollapsed : classes.drawer}
      classes={{
        paper: collapsed ? classes.drawerPaperCollapsed : classes.drawerPaper
      }}>
      <Toolbar />
      <div>Sidebar</div>
    </Drawer >
  );
}

export default Sidebar;
