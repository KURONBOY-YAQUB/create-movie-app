import React from "react";

export default class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
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
            onClick={() => this.props.searchMovies(this.state.search)}
          >
            Search Movies
          </button>
        </div>
      </div>
    );
  }
}
