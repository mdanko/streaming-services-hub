import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Sidebar from '../Sidebar/Sidebar';
import Appbar from '../Appbar/Appbar';


const DRAWER_WIDTH = { EXPANDED: 200, COLLAPSED: 50 };

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: "column",
    height: "100vh"
  },
  main: {
    flex: "1 1 auto",
    backgroundColor: theme.palette.background.default
  },
  container: {
    height: "100%"
  },
  content: {
    height: "100%",
    marginLeft: DRAWER_WIDTH.EXPANDED,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })

  },
  contentExpanded: {
    height: "100%",
    marginLeft: DRAWER_WIDTH.COLLAPSED,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    })
  },
  friends: {
    height: "100%"
  }
}));

const App = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    drawerCollapsed: false
  });

  const toggleDrawer = (open) => {
    setState({ drawerCollapsed: open });
  };

  return (
    <div className={classes.root}>
      <Appbar onMenuClick={() => { toggleDrawer(!state.drawerCollapsed) }} />

      <Sidebar collapsed={state.drawerCollapsed} />

      <main className={classes.main}>
        <Grid container className={classes.container}>
          <Grid item xs={10}>
            <Paper square className={state.drawerCollapsed ? classes.contentExpanded : classes.content}>Content</Paper></Grid>
          <Grid item xs={2}><Paper square className={classes.friends}>Friends</Paper></Grid>
        </Grid >
      </main>

    </div >
  );
}

export default App;
