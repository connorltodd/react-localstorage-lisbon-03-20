import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // We are retrieving the local storage item if it exists
      // It needs to be parsed first as it is stored as a string
      // If the local storage item does not exist we set a default value to 0
      counter: JSON.parse(localStorage.getItem('counter')) || 0
    }
  }

  // This method simply handles increments or decrements based off of the 
  // operator received within the parameter
  handleCounter = (operator) => {
    let counter = this.state.counter
    if (operator === '+') {
      counter += 1
    } else {
      counter -= 1
    }

    this.setState({ counter })

    // We set the local storage item with the first string being
    // the name this is always a string.
    // The second value we need to stringify the item in order
    // for it to be stored correctly on the local storage
    localStorage.setItem('counter', JSON.stringify(counter))
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        <button onClick={() => this.handleCounter('+')}>+</button>
        <button onClick={() => this.handleCounter('-')}>-</button>
      </div>
    );
  }
}

export default App;
