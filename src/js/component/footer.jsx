import React from "react";
var stylingObject = {
    footer:{
        backgroundColor:"black", 
        paddingLeft:"2%",
        justifyContent:"center",
        position:"absolute",
        bottom:"0",
        width:"100%"
    },
    footerMain: {
        color: "white",
        fontSize:"1em"
    }
  }


const Footer = ()=>{
    return <footer className="navbar container-fluid"
    style={stylingObject.footer}>
        <a className="navbar-brand" href="#" style={stylingObject.footerMain} >
            Copyright @Jossvo 2022
        </a>
    </footer>
};

export default Footer;
