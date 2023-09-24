import React from "react";

class Moviecard extends React.Component {
    render(){

        console.log("rendered the component");
        // object destructuring
        console.log(this.props);

        // const {movies: data} = this.props;
        // console.log(data);

        const {title, plot, price, rating, stars, fav, isInCart} = this.props.movies;

        
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

                                <img 
                                  className="str-btn" 
                                  alt="decrease" 
                                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png" 
                                  onClick={this.removeStars}
                                />
                                
                                <img 
                                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                  className="stars" 
                                  alt="star" 
                                />

                                   <img 
                                    className="str-btn" 
                                    alt="increase" 
                                    src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                                    onClick={this.addStars}
                                   />

                                   <span>{stars}</span>
                            </div>

                            {/* 
                            {this.state.fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button> :    
                            <button className="favourite-btn"
                            onClick={this.handleFav}>Favourite</button>} */}


                            <button className= {fav? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav? "Unfavourite" : "Favourite"}</button>

                            {/* {this.state.cart? 
                            <button className="remove-cart-btn" onClick={this.handleCart}>Remove From Cart</button>:
                            <button className="cart-btn" onClick={this.handleCart}>Add to Cart</button> 
                            } */}

                            <button className={isInCart? "remove-cart-btn" : "cart-btn"} onClick={this.handleCart}>{isInCart? "Remove From Cart" : "Add To Cart"}</button>
                        

                            
                        </div>
                    </div>
                </div>
             </div>
            </>
        )
    }
}

export default Moviecard;