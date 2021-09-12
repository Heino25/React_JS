import React from 'react';
import axios from 'axios'; // make use of axios to make a request to the unsplash api
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
