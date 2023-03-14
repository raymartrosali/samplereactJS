import { useState,useEffect } from "react";
const Timer = () => {
    const [time, setTime] = useState(60);
    useEffect(()=>{
        setTimeout(()=>{
            setTime(() => time - 1);
        }, 1000);
    });
    return ( 
    <div>
        <h1>{time}</h1>
    </div> );
}
 
export default Timer;