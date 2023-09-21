import React from 'react';
import MovieCard from "./Moviecard";

class MovieList extends React.Component {
    render(){
        return (
            <>
             <MovieCard />
             <MovieCard />
             <MovieCard />
             <MovieCard />
             <MovieCard />
            </>
        )
    }
}

export default MovieList;