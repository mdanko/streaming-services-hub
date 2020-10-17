import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TileList from '../TileList/TileList';

const topics = [{
  title: "Watchlist",
  items: ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
}, {
  title: "Currently Watching",
  items: ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
}, {
  title: "Suggested By Friends",
  items: ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
}, {
  title: "",
  items: ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
}, {
  title: "",
  items: ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"]
}];

const useStyles = makeStyles((theme) => ({}));

const ContentContainer = ({ expanded }) => {
  const classes = useStyles();

  return (
    <React.Fragment >
      { topics.map((topic, i) => <TileList key={i} expanded={expanded} title={topic.title} items={topic.items} />)}
    </React.Fragment>
  );
}

export default ContentContainer;
