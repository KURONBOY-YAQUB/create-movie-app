import React from "react";
import Movies from "../components/Movies";

export default class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <div className="container content">
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}
