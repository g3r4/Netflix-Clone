import React, { Component } from 'react';
 

class MovieGenreImage extends Component {


   render() {
      let netflixUrl = false; 

      if (this.props.url === "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
        netflixUrl = true; 
      }

      return (
        
         <div onClick={this.props.movieDetailsModal} 
            className={ "movieShowcase__container--movie" + (netflixUrl ? "__netflix" : "")}>
            <img src={this.props.posterUrl} className="movieShowcase__container--movie-image"/>
         </div>

      ); 
   }
}

export default MovieGenreImage; 