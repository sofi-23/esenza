import React, {useState} from "react";


const  ItemCount = ({min, max}) => {
    const [disabledMin, setDisabledMin] = useState(true);
    const [disabledMax, setDisabledMax] = useState(false);
    const disableMin = () => {setDisabledMin(true)};
    const disableMax = () => {setDisabledMax(true)};
    console.log("min: " + min);
    console.log("max: " + max);
    const [count, setCount] = useState(1);
    const addProduct=()=>{setCount(count + 1)};
    const takeOutProduct=()=>{setCount(count - 1)};
    const maxClick = () => {
        checkMax();
        checkDisableMax();
    }
    const minClick = () => {
        checkMin();
        checkDisableMin();
    }
    const checkDisableMax = ()=> {
        if (count === 6 || count === 7 ) {
            disableMax();
            setDisabledMin(false);

        }else{
            setDisabledMax(false);

        }
    }
    const checkDisableMin = ()=> {
        if (count === 2 || count === 1 ) {
            disableMin();
            setDisabledMax(false);
        }else{
            setDisabledMin(false);

        }
    }
    const checkMax = () => { 
        if (count === max) {
        setCount(7);
    }else {
        addProduct();

    }}; 
    const checkMin = () => { 
        if (count === min) {
        setCount(1);
        
    }else {
        takeOutProduct();

    }}; 
    return (
        <div className="productCountContainer">
        <button disabled={disabledMin} className="substractButton button is-rounded is-warning " onClick={minClick}>-</button>
        <span className="productCount">{count}</span>
        <button disabled={disabledMax} className="addUpButton button is-rounded is-warning" onClick={maxClick}>+</button>
        </div>
    )
}


export default ItemCount