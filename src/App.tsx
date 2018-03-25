import * as React from 'react';
import Player from './Player/component/Player';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Player
          color="black"
        />
      </div>
    );
  }
}

export default App;
