
import React from "react";
const Item = ({items, key}) => {
        return (
        <>      
        
                <div className="card">
                    <div className="card-image"> <img src={items.pictureUrl} alt="perfume" /></div>
                    <h3 className="card-header">{items.title}</h3>
                    <p className="card-content">{items.description}<span>{items.price}</span></p>
                </div>
            
         
        
        </>
    )
}



export default Item
