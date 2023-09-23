import React from 'react';
import MovieCard from "./Moviecard";

class MovieList extends React.Component {

    constructor() {

        // this method will call the constructor of the parent class i.e Component
        super();

        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            cart: false
        }
    }

    render(){

        const {title, plot, price, rating, stars, fav, cart} = this.state;

        return (
            <>
             <MovieCard 
                title = {title} 
                plot = {plot}
                price = {price}
                rating = {rating}
                stars = {stars}
                fav = {fav}
                cart = {cart}
             />
            </>
        )
    }
}

export default MovieList;