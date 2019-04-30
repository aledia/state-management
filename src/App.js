import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends React.Component {
  state = {
    movies: [
      {
        _id: "abcc1234",
        name: "Batman",
        year: 2015,
        style: "action"
      },
      {
        _id: "abcc1235",
        name: "The name of the Rose",
        year: 1986,
        style: "thriller"
      },
      {
        _id: "abcc1236",
        name: "Shrek",
        year: 2005,
        style: "3d"
      }
    ],
    clickedTimes: 0,
    counterColor: `rgba(255, 120, 0, 0.5)`,
    changeColorThreshold: 5,
    underThresholdColor: "red",
    overThresholdColor: "blue"
  }

  nextMovie() {
    if (this.state.currentMovie + 1 === this.state.movies.length) return;

    this.setState({
      //this clones previous state
      ...this.state,
      currentMovie: this.state.currentMovie + 1
    })
  }

  deleteMovie(movieId) {
    this.setState({
      ...this.state,
      movies: this.state.movies.filter(movie => movie._id !== movieId)
    })
  }

  addNewMovie() {
    let allTheMovies = [...this.state.movies]
    allTheMovies.push({
      _id: Math.round(Math.random() * 10000000),
      name: "El gato con botas",
      year: 2017,
      style: "3d very fun"
    })

    this.setState({
      ...this.state,
      movies: allTheMovies
    })
  }

  increaseCounter() {
    const state = this.state;
    const theColor = (state.clickedTimes + 1 > state.changeColorThreshold) ? state.underThresholdColor : state.overThresholdColor;

    this.setState({
      ...this.state,
      clickedTimes: state.clickedTimes + 1,
      counterColor: theColor
    })
  }

  decreaseCounter() {
    const state = this.state;
    const theColor = (state.clickedTimes - 1 > state.changeColorThreshold) ? state.underThresholdColor : state.overThresholdColor;

    if (state.clickedTimes - 1 < 0)  return
    this.setState({
      ...this.state,
      clickedTimes: state.clickedTimes - 1,
      counterColor: theColor
    })
  }

  render() {
    const mappedMovies =
      this.state.movies.map(movie => {
        return (
          <React.Fragment key={movie._id}>
            {/* <Movie
              key={movie._id}
              name={movie.name}
              year={movie.year}
              style={movie.style}>
            </Movie> */}


            <Movie {...movie} />
            <button onClick={() => this.deleteMovie(movie._id)}>Delete this movie</button>
          </React.Fragment>
        )
      })

    return (
      <React.Fragment>
        <h1>Total movies {this.state.movies.length}</h1>
        <h3 style={{color: this.state.counterColor}}>Counter {this.state.clickedTimes}</h3>

        {
          (this.state.clickedTimes > this.state.changeColorThreshold) ? 
            <div>The clicked times is high</div> 
            : 
            <div>The clicked times is low</div> 
        }

        <button onClick={() => this.increaseCounter()}>Increase counter</button>
        <button onClick={() => this.decreaseCounter()}>Decrease counter</button>
        <button onClick={() => this.addNewMovie()}>Add new movie</button>
        {mappedMovies}

      </React.Fragment>
    )
  }
}

export default App;
