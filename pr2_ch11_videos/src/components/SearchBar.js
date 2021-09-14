import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // Called with event object
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  // Called with event object
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);

    // callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;