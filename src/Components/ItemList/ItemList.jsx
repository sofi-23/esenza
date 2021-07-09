import React from "react";
import {useState} from "react";

const ItemList = ({array}) => {
    const newArray = array.map(aarr=>aarr);
    const img = array.map(arr=>arr.pictureUrl);
    console.log("imagen 0" + img[0]);
    const title = array.map(arr=>arr.title);
    const price = array.map(arr=>arr.price);

    return (
        
    <div className="columns">
        <div className="column">
            <div className="card">
                <div className="card-image"><img src={''+img[0]+''} />
                </div>
            </div>
        </div>
     </div>
    )
};

export default ItemList;