import React, { Component } from 'react';
import LoginWithHooks from './loginWithHooks';
import HPCharactersWithHooks from './HPCharactersWithHooks';

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <LoginWithHooks />
          <HPCharactersWithHooks />
      </div>
    );
  }
}

export default App;
