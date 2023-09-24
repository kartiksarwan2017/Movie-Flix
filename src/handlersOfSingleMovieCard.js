//  addStars(){
//         // this.state.stars += 0.5;
//         // console.log("this: ", this);
//         // console.log("this.state: ", this.state);
//         // console.log("this.state.stars: ", this.state.stars);

//         // first form of updating the state using setState() in this case we can directly pass the object inside setState()
//         // this.setState({
//         //     stars: this.state.stars + 0.5
//         // })

//         // second form of updating the state using setState()

//         if(this.state.stars >= 5){
//             return;
//         }

//         /* Asynchronous Nature of setState */
//         // this.setState((prevState) => {
//         //     return {
//         //         stars: prevState.stars + 0.5
//         //     }
//         // }, () => console.log("stars inside callback: ", this.state.stars));

//         // console.log("stars: ", this.state.stars);


//         this.setState({
//             stars: this.state.stars + 0.5
//         });
//         this.setState({
//             stars: this.state.stars + 2
//         });
//         this.setState({
//             stars: this.state.stars + 3
//         });
//         this.setState({
//             stars: this.state.stars + 2
//         });

//         console.log("stars: ", this.state.stars);

//     }


//     removeStars() {

//         // form 1
//         // this.setState({
//         //     stars: this.state.stars - 0.5
//         // })

//         // form 2
//         if(this.state.stars <= 0){
//             return;
//         }

//         this.setState((prevState) => {
//             return {
//                 stars: prevState.stars - 0.5
//             }
//         })  
        
//     }

//     handleFav = () => {
//         this.setState({
//             fav: !this.state.fav
//         });
//     }

//     handleCart = () => {
//         this.setState({
//             cart: !this.state.cart
//         });
//     }