import React from "react";

class Practice extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
            });
            this.setState((prevState) => {
            return {
            count: prevState.count + 1
            };
            });
            this.setState({
            count: this.state.count + 1
            });
            this.setState((prevState) => {
            return {
            count: prevState.count + 1
            };
            });

            console.log(this.state.count)
    }

    render() {
        return(
            <>

            <button onClick={this.increaseCount}>click</button>
            <p>{this.state.count}</p>
            </>
        )
    }
    
}


export default Practice;