import React from "react";
import Cart from "./Cart/Cart.jsx"
import Logo from "./Logo/Logo.jsx"

const Navbar = (props) => {
    console.log(props);
    return (
        <nav className="navBar">
        <div className="navBarMenu">
            <div className="titulo">
            <Logo />
            </div>
            <ul className="lista">
                <li>Yves Saint Laurent</li>
                <li>Calvin Klein</li>
                <li>Gucci</li>
                <li>Pacco Rabanne</li>
                <li>Dior</li>
            </ul>
            </div>
            <Cart  />
        </nav>
    );
};

export default Navbar;
