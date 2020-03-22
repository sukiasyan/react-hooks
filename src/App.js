import React, { Component } from 'react';
import LoginWithHooks from './hooksStart/loginWithHooks';
import HPCharactersWithHooks from './hooksStart/HPCharactersWithHooks';
import Workout from './Components/Workout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App">
        <h1>Work Tracker</h1>
        <Workout />
      </div>
          {/*<LoginWithHooks />*/}
          {/*<HPCharactersWithHooks />*/}
      </div>
    );
  }
}

export default App;
