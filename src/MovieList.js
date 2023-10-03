import React from 'react';
import MovieCard from "./Moviecard";

class MovieList extends React.Component {

    constructor() {

        // this method will call the constructor of the parent class i.e Component
        super();

        this.state = {
            movies: [{
                id: 1,
                title: 'The Avengers',                  
                plot:
                  "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                poster:
                  'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                rating: '8.0',            
                price: 99,            
                star: 0,
                fav: false,
                isInCart: false                  
              },
              {
                id: 2,
                title: 'The Dark Knight',                  
                plot:
                  'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                poster:
                  'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                rating: '9.0',            
                price: 199,            
                star: 0,            
                fav: false,
                isInCart: false                  
              },
              {
                id: 3,
                title: 'Iron Man',                 
                plot:
                  'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                poster:
                  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                rating: '7.9',            
                price: 139,            
                star: 0,            
                fav: false,
                isInCart: false                  
              }]
        }
    }

    handleIncStar = (movie) => {

        const {movies} = this.state;

        const movId = movies.indexOf(movie);

        if(movies[movId].star >= 5){
            return; 
        }

        movies[movId].star += 0.5;
        this.setState({
            movies: movies
        });

    }

    handleDecStar = (movie) => {

      const {movies} = this.state;

      const movId = movies.indexOf(movie);

      if(movies[movId].star <= 0){
        return;
      }

      movies[movId].star -= 0.5;

      this.setState({
        movies
      });

    }


    handleFavourite = (movie) => {
      
      const {movies} = this.state;
      const movId = movies.indexOf(movie);

      movies[movId].fav = !movies[movId].fav;

      this.setState({
        movies: movies
      });

    }

    handleCart = (movie) => {

      const {movies} = this.state;
      const movId = movies.indexOf(movie);

      movies[movId].isInCart = !movies[movId].isInCart;

      this.setState({
        movies: movies
      });

    }


    render(){

        // const {title, plot, price, rating, stars, fav, isInCart, poster} = this.state.movies;
        const {movies} = this.state;

        return (
            <>
             {movies.map((movie, index) => 
                <MovieCard 
                   key={movie.id} 
                   movies = {movie} 
                   addStars = {this.handleIncStar} 
                   removeStars = {this.handleDecStar}
                   addToFavourites = {this.handleFavourite}
                   addToCart = {this.handleCart}
                />
             )}
            </>
        )
    }
}

export default MovieList;