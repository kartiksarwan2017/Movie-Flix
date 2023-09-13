import React from "react";

class Moviecard extends React.Component {

    constructor() {

        // this method will call the constructor of the parent class i.e Component
        super();

        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9
        }

    }

    addStars(){
        console.log("this: ", this);
        console.log("this.state: ", this.state);
    }

    render(){

        // object destructuring
        const {title, plot, price, rating} = this.state;

        
        return (
            <>
             <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"  alt="Poster" />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>


                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" />
                                
                                <img 
                                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                  className="stars" 
                                  alt="star" 
                                />

                                   <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                                   onClick={this.addStars.bind(this)}
                                   />

                                   <span>0</span>
                            </div>
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