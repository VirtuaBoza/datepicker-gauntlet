import React, { Component } from 'react';

class Home extends Component {
  displayName = Home.name

  render() {
    return (
      <div>
        <h3>Be sure to clear your cache after clicking on one of the links to the left as the polyfills may need to be refreshed from page to page.</h3>
      </div>
    );
  }
}

export default Home;
