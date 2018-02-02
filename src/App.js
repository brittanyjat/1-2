import React, { Component } from 'react';
import routes from './routes';
import Header from './Components/Header';

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Header />
        <div>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
