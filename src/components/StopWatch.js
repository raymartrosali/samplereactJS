import { useState, useRef } from "react";

const StopWatch = () => {
    const [second, setSecond] = useState(0);
    const timer = useRef();
    let timeing = "";
    
    const startTime = () =>{
        clearInterval(timeing);
        timeing = setInterval(() =>{
            setSecond(second => second + 1);
        }, 1000)
    }
    const stopTime = () =>{
        clearInterval(timeing);
    }
    return ( 
        <div>
            <h1>{second}</h1>
            <button onClick={startTime}>Start</button>
            <button onClick={stopTime}>Stop</button>
            <button>Restart</button>
        </div>
     );
}
 
export default StopWatch;