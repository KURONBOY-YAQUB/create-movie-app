import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  handleFilter = (e) => {
    this.setState({ type: e.target.dataset.type }, () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
            className="validate"
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search Movies
          </button>
        </div>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleFilter}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    );
  }
}
