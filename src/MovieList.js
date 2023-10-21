import React from 'react';
import MovieCard from "./Moviecard";


class MovieList extends React.Component {
    render(){

        // const {title, plot, price, rating, stars, fav, isInCart, poster} = this.state.movies;
        const {movies, addStars, decStars, toggleFavourite, toggleCart} = this.props;

        return (
            <>
             {movies.map((movie, index) => 
                <MovieCard 
                   key={movie.id} 
                   movies = {movie} 
                   addStars = {addStars} 
                   decStars = {decStars}
                   toggleFavourite = {toggleFavourite}
                   toggleCart = {toggleCart}
                />
             )}
            </>
        )
    }
}

export default MovieList;