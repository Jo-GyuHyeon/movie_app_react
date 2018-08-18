// import React, { Component } from 'react';

// class MoviePoster extends Component {
//   render() {
//     return (
//       <div>
//         <img src={require('./img/'+this.props.title+'.jpg')}/>
//       </div>
//     );
//   }
// }

// export default MoviePoster;

import React from 'react';

const MoviePoster = (movie) => {
  return (
    <div>
      <img src={require('./img/'+movie.title+'.jpg')}/>
    </div>
  );
};

export default MoviePoster;