import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Sidebar from '../Sidebar/Sidebar';
import Appbar from '../Appbar/Appbar';
import ContentContainer from '../ContentContainer/ContentContainer';

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
  contentGrid: {
    overflowY: "scroll"
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
        {/* main container */}
        <Grid container className={classes.container}>
          <Grid item xs={10} className={classes.contentGrid} >
            <ContentContainer expanded={state.drawerCollapsed} />
          </Grid>

          <Grid item xs={2}>
            {/* friends container */}
            <Paper square className={classes.friends}>Friends</Paper>
          </Grid>
        </Grid >
      </main>

    </div >
  );
}

export default App;
