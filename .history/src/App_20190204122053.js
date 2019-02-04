import React, { Component } from 'react';

const App = () => (<Counter></Counter>)


class Counter extends Component {
  render() {
    return (<div>counter</div>)
  }
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
