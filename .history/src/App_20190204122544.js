import React, { Component } from 'react';

const App = () => (<Counter></Counter>)


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button >+1</button>
      </React.Fragment>
    );
  }
}

export default App;
