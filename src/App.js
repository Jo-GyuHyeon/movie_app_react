import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

let key = 0;

class App extends Component {

  state = {
  //   movies : [
  //     "공작", "그래비티", "맘마미아", "몬스터호텔", "미션임파서블", "신과함께", "인랑", "인크레더블"
  //   ]
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies: ["공작", "그래비티", "맘마미아", "몬스터호텔", "미션임파서블", "신과함께", "인랑", "인크레더블"]
      })
    },2000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map(movie => {
      key++;
      return <Movie title = {movie} key={key}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
      {
        this.state.movies ? this._renderMovies() : "Loding"
      }
      </div>
    );
  }
}

export default App;
