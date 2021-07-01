import React from "react";

const Navbar = (props) => {
    console.log(props);
    return (
        <nav class="navBar">
            <div class="titulo">
            <h1>{props.nombreDeLaTienda}</h1>
            <h2>{props.subtitulo}</h2>
            </div>
            <ul class="lista">
                <li>Yves Saint Laurent</li>
                <li>Calvin Klein</li>
                <li>Gucci</li>
                <li>Pacco Rabanne</li>
                <li>Dior</li>
            </ul>
        </nav>
    );
};

export default Navbar;
