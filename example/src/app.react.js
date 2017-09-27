import React, { Component } from 'react';
import { render } from 'react-dom';
import Looper from '../../lib/Looper-Component.react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [{ name: 'Whien', age: 18 }],
      foods: {
        food1: { name: 'milk' },
        food2: { name: 'nooodle' }
      }
    };
  }
  render() {
    return (
      <div>
        <Looper
          items={this.state.users}
          render={({ name, age }, index) => (
            <div key={`index-${name}-${age}`}>
              name: {name} age: {age}
            </div>
          )}
        />
        <Looper
          items={this.state.foods}
          render={({ name }, index) => (
            <div key={`index-${name}`}>name: {name}</div>
          )}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('view'));
