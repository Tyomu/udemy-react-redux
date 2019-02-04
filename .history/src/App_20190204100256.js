import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        < input type="text" onChange={() => { console.log("I am clicked.") }} />
      </div>
    )

  }
}

export default App;
