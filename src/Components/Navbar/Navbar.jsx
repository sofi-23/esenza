import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = (props) => {
    console.log(props);
    return (
        <nav className="navBar">
        <div className="navBarMenu">
            <div className="titulo">
            <h1 className="name">Esenzas</h1>
            </div>
            <ul className="lista">
                <li>YSL</li>
                <li>CALVIN KLEIN</li>
                <li>GUCCI</li>
                <li>PACCO RABANNE</li>
                <li>DIOR</li>
            </ul>
            </div>
          <AiOutlineShoppingCart />
        </nav>
    );
};

export default Navbar;
