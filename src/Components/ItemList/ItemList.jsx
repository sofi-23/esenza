
import React from "react";
import Item from "./Item"

const ItemList = ({array}) => {
   // const newArray = array.map(aarr=>aarr);
     
    return (
        
        <div className="columns">
          
                {array.map(array => (
                      <div className="column">
                          <Item items={array} key={array.id}/> 
                      </div>
                ))}
        </div>
       
        
    )
};

export default ItemList;
