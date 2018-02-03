import React, { Component } from 'react';
import routes from './routes';

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default App;
