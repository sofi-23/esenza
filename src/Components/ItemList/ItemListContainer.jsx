
import React from "react"
import ItemCount from "./ItemCount"
import  ItemList from "./ItemList"
import {useState, useEffect} from "react"


const ItemListContainer = (props) => {
    const items = [
        {id: 1,
        title: "Mon Paris Eau de Parfum 90ml- Yves Saint Laurent ",
        description: "This fragrance contains notes of red berries and patchouli.This fragrance contains notes of red berries and patchouli.",
        price: 120,
        pictureUrl: "../../../public/img/monparis-ysl.jpg",
        },
        {id: 2,
            title: "Libre Eau de Parfum 90ml- Yves Saint Laurent",
            description: "An intertwining bouquet of Moroccan orange blossom and jasmine.",
            price: 100,
            pictureUrl: "../../../public/img/libre-ysl.png",},
        {id: 3,
            title: "Opium Eau de Parfum 90ml- Yves Saint Laurent",
            description: "A captivating floral gourmand scent, twisted with an overdose of black coffee, for a shot of adrenaline.",
            price: 110,
            pictureUrl: "../../../public/img/opium-ysl.jpg",},
        {id: 4,
            title: "Yves Sait Laurent Eau de toilette 90ml- Yves Saint Laurent",
            description: "A bold and woody men's fragrance.",
            price: 110,
            pictureUrl: "../../../public/img/ysl-ysl.jpg",}
    ];
    
    const [itemArray, setItemArray]  = useState([]);

        const getItems = () => {
            
        return (new Promise ((resolve, reject) => {
            setTimeout(()=>{
                console.log("me ejecuté")
                resolve(items);
            }, 2000)
        }))
    };

    useEffect(() => {
     getItems().then((resolve=>setItemArray(resolve))).catch((error=>console.log(error)));
}, [])
      

        console.log("itemArray" + itemArray);
        return (
            <>
    
    <ItemList array={itemArray}  />
    <ItemCount  max={7} min={1} />
    </>
    )
};

export default ItemListContainer;
