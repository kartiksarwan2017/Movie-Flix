import React from 'react';
import MovieCard from "./Moviecard";

class MovieList extends React.Component {

    constructor() {

        // this method will call the constructor of the parent class i.e Component
        super();

        this.state = {
            movies: [{
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

    addStars(){
        // this.state.stars += 0.5;
        // console.log("this: ", this);
        // console.log("this.state: ", this.state);
        // console.log("this.state.stars: ", this.state.stars);

        // first form of updating the state using setState() in this case we can directly pass the object inside setState()
        // this.setState({
        //     stars: this.state.stars + 0.5
        // })

        // second form of updating the state using setState()

        if(this.state.stars >= 5){
            return;
        }

        /* Asynchronous Nature of setState */
        // this.setState((prevState) => {
        //     return {
        //         stars: prevState.stars + 0.5
        //     }
        // }, () => console.log("stars inside callback: ", this.state.stars));

        // console.log("stars: ", this.state.stars);


        this.setState({
            stars: this.state.stars + 0.5
        });
        this.setState({
            stars: this.state.stars + 2
        });
        this.setState({
            stars: this.state.stars + 3
        });
        this.setState({
            stars: this.state.stars + 2
        });

        console.log("stars: ", this.state.stars);

    }


    removeStars() {

        // form 1
        // this.setState({
        //     stars: this.state.stars - 0.5
        // })

        // form 2
        if(this.state.stars <= 0){
            return;
        }

        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5
            }
        })  
        
    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        });
    }

    handleCart = () => {
        this.setState({
            cart: !this.state.cart
        });
    }


    render(){

        // const {title, plot, price, rating, stars, fav, isInCart, poster} = this.state.movies;
        const {movies} = this.state;

        return (
            <>
             {movies.map((movie, index) => 
                <MovieCard key={index} movies = {movie} />
             )}
            </>
        )
    }
}

export default MovieList;