import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Website Promotions</h1>
                <Typed
                    className="typed-text"
                    strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
                <a href="#" className="btn-main-offer"> Contact Me</a>
            </div>
        </div>
    )
}

export default Header