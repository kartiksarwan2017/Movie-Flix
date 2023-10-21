import React from "react";
import MovieList from "./MovieList";
import NavbarModule from "./NavbarModule";
import Navbar from "./Navbar";
import { movies } from "./moviesData";


// import HeadingOne from "./HeadingOne";
// import HeadingTwo from "./HeadingTwo";

// function App() {
//   return (
//     <>
//      {/* <NavbarModule /> */}
//      <Navbar />
//      <MovieList />

//      {/* <HeadingOne />
//      <HeadingTwo /> */}

//     </>
//   );
// }

// export default App;


class App extends React.Component {
  
  constructor() {

    // this method will call the constructor of the parent class i.e Component
    super();

    this.state = {
        movies: movies,
        cartCount: 0
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

  if(movies[movId].isInCart){
    this.state.cartCount += 1;
  }else{
    this.state.cartCount -= 1;
  }

  this.setState({
    movies: movies
  });

}

  
  render() {

  const {movies} = this.state;

   return (
    <>

      {/* <NavbarModule /> */}
       <Navbar cartCount = {this.state.cartCount} />
       <MovieList movies= {movies} 
                  addStars = {this.handleIncStar} 
                  decStars = {this.handleDecStar}
                  toggleFavourite = {this.handleFavourite}
                  toggleCart = {this.handleCart}
       />

      {/* <HeadingOne />
      <HeadingTwo /> */}
    </>
   ) 
  }
}

export default App;