import React from "react";

function Footer (){
    const date = new Date ();
const currentTime = date.getFullYear();

    return (
        <footer>
        <p >Copyright © {currentTime}</p>
        </footer>
    
    );
}


export default Footer;