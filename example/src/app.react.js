import React, { Component } from 'react';
import { render } from 'react-dom';
import Looper from '../../lib/Looper-Component.react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }
  render() {
    return (
      <Looper
        items={this.state.users}
        render={({ name, age }, index) => (
          <div key={`index-${name}-${age}`}>
            name: {name} age: {age}
          </div>
        )}
      />
    );
  }
}

render(<App />, document.getElementById('view'));
