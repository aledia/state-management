import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

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
    const currentMovie = this.state.currentMovie
    const movies = this.state.movies

    return (
      <React.Fragment>
        <Movie 
          name={movies[currentMovie].name} 
          year={movies[currentMovie].year}
          style={movies[currentMovie].style}>
        </Movie>

        <button onClick={()=>this.nextMovie()}>See next movie</button>
      </React.Fragment>
    )
  }
}

export default App;
