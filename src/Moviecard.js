import React from "react";

class Moviecard extends React.Component {
    render(){
        return (
            <>
             <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"  alt="Poster" />
                    </div>

                    <div className="right">
                        <div className="title">
                            The Avengers
                        </div>
                        <div className="plot">Supernatural powers shown in the movie.</div>
                        <div className="price">Rs. 199</div>


                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">star</div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
             </div>
            </>
        )
    }
}

export default Moviecard;