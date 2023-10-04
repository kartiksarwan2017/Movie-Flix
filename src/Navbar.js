import React from "react";

class Navbar extends React.Component{
    render(){
        return (
            <>
            <div style={{ width: "100%", 
                          height: 70, 
                          backgroundColor: "red", 
                          display: "flex", 
                          justifyContent: "space-between"
                        }}>
                <div className="title">Movie-App</div>
                <div>
                    <img alt="Cart Icon" />
                    <span>0</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;
