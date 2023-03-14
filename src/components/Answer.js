import { useState, useEffect } from "react";

const Answer = ({getItems}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        alert("Multiplying");
        setItems(getItems());
    }, [getItems]);
    return ( 
        <div>
            {items[0] || "Waiting for input"}<br></br>
            {items[1] || "--"}<br></br>
            {items[2] || "--"}<br></br>
            {items[3] || "--"}<br></br>
            {items[4] || "--"}<br></br>
            {items[5] || "--"}<br></br>
            {items[6] || "--"}<br></br>
            {items[7] || "--"}<br></br>
            {items[8] || "--"}<br></br>
            {items[9] || "--"}<br></br>
        </div>
     );
}
 
export default Answer;