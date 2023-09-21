import React from "react";

class Student extends React.Component {
    render(){
        console.log(this.props)
        return(
            <>
             <h1>Hello, {this.props.stuname}</h1>
             <p>You have secured {this.props.marks} %</p>
             <hr />
            </>
        )
    }
}

export default Student;