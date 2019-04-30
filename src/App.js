import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    clickTimes : 0
  }

  // constructor () {
  //   super();

  //   this.state = {
  //     clickTimes : 0
  //   }
  // }

  increaseCounter(param) {
    this.setState({
      clickTimes : this.state.clickTimes + 1
    })
  }

  render() {
    return (
      <div>
        {this.state.clickTimes}
        <h1>Hola ironhackers! {this.state.clickTimes}</h1>{this.state.clickTimes}
        {/* <button onClick={this.increaseCounter.bind(this)}>click me to increase counter 1!</button> */}
        <button onClick={() => this.increaseCounter(999999)}>click me to increase counter!</button>
        {this.state.clickTimes}
        xxxx
        {this.state.clickTimes}
        </div>
    )
  }
}

export default App;
