import React from 'react';
import navLogo from "../../assets/logo.svg"
const Logo = () => {
    return (
         <a href="./index.html">
                        <img className="h-9" src={navLogo} alt="Weather App" />
                    </a>
    );
};

export default Logo;