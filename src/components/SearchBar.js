import React from "react";
import "./ImageList.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment top-search">
        <h2>Photo Gallery</h2>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field search-bar">
            <label>Search Images here</label>
            <input
              type="text"
              placeholder="Your search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
