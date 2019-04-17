import React, { Component } from 'react'; // JSX expressions get compiled to calls to React.createElement().

export default class Counter extends Component { // When we export, other files (modules) can import and use them
  state = { value: 1 };

  render() {
    return (
      <div>
        <div>{ this.state.value }</div>  {/*When we click this button, we call the setState method. This will, in turn, update the state of our component.*/}
        <button onClick={() => { this.setState({ value: this.state.value + 1 }) }}>Increment</button>
      </div>
    )
  }
}
// https://programmingwithmosh.com/react/react-tutorial-beginners/
