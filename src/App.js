import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    movies: [
      {
        name: "Batman",
        year: 2015,
        style: "action"
      },
      {
        name: "The name of the Rose",
        year: 1986,
        style: "thriller"
      },
      {
        name: "Shrek",
        year: 2005,
        style: "3d"
      }
    ],
    currentMovie: 0
  }

  nextMovie() {
    if (this.state.currentMovie + 1 === this.state.movies.length) return;

    this.setState({
      //this clones previous state
      ...this.state,
      currentMovie: this.state.currentMovie + 1
    })
  }

  render() {
    return (
      <div>
        <div>
          <p>Name: {this.state.movies[this.state.currentMovie].name}</p>
          <p>Year: {this.state.movies[this.state.currentMovie].year}</p>
          <p>Style: {this.state.movies[this.state.currentMovie].style}</p>
        </div>

        <button onClick={()=>this.nextMovie()}>See next movie</button>
      </div>
    )
  }
}

export default App;
