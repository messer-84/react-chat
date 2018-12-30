import React, {Component} from 'react';
import './App.css';

import Welcome from './Welcome';
import Clock from './Clock';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="World">World</Welcome>
          <hr/>
          <Clock/>
          <List/>
        </header>
      </div>
    );
  }
}

export default App;
