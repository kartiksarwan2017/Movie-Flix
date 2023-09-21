import React from "react";

class Student extends React.Component {
    render(){
        console.log(this.props)
        return(
            <>
             <h1>Hello, {this.props.stuname}</h1>
            </>
        )
    }
}

export default Student;