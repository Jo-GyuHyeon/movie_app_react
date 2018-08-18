import React, { Component } from 'react';
import './Movie.css'
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';

// class Movie extends Component {

//   render() {
//     const title = this.props.title;
//     console.log(this.props.title)
//     return (
//       <div>
//         <MoviePoster title ={title}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

const Movie = (movie) => {
  return (
    <div>
      <MoviePoster title ={movie.title}/>
        <h1>{movie.title}</h1>
    </div>
  );
};


Movie.propTypes = {
  title:PropTypes.string.isRequired
};

Movie.defaultProps ={
  title:''
}

export default Movie;