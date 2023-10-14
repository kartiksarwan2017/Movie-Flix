import React from "react";
import styled from "styled-components";
import navbarStyle from "./Navbar.module.css";


const CartCount = styled.span`
    background: ${(props) => props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(props) => props.show? "visible": "hidden"}
`;

class Navbar extends React.Component{
    render(){
        return (
            <>
            <div className={navbarStyle.nav}>
                <div className={navbarStyle.title}>Movie-App</div>
                <div className={navbarStyle.cartcontainer}> 
                    <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" className={navbarStyle.carticon} alt="Cart Icon" />
                    <CartCount color = "yellow" show={true}>0</CartCount>
                </div>
            </div>
            </>
        ) 
    }
}

export default Navbar;

