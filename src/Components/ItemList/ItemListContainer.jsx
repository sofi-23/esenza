import React from "react";
import ItemCount from "./ItemCount"


const ItemListContainer = (props) => {
    return <ItemCount  max={7} min={1} />
};

export default ItemListContainer;