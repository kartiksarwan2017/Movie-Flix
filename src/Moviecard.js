import React from "react";

class Moviecard extends React.Component {

    constructor() {

        // this method will call the constructor of the parent class i.e Component
        super();

        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0
        }

        this.addStars = this.addStars.bind(this);
        this.removeStars = this.removeStars.bind(this);
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

    render(){

        // object destructuring
        const {title, plot, price, rating, stars} = this.state;

        
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