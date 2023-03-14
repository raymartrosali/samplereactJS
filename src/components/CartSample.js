import { useState, useEffect } from "react";
const CartSample = () => {
    const [count, totalCount] = useState(0);
    const [value, totalValue] = useState(0);
    useEffect(()=>{
        totalValue(() => 2999.99 * count);
    });
    return ( 
    <div>
        <h1>LG LAPTOP INVERTER</h1>
        <h2>Price: 2999.99</h2>
        <button onClick={() => totalCount((c) => c + 1 )}>+</button>
        <span>{count}</span>
        <button onClick={() => totalCount((c) => c - 1 )}>-</button>
        <p>Total Price: {value}</p>
    </div> );
}
 
export default CartSample;