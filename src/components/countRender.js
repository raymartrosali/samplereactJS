import { useState, useRef } from "react";

const CountRender = () => {
    const [value, setValue] = useState('');
    const renderCount = useRef(0); 
    const changingInput = (e) =>{
        setValue(e.target.value);
        renderCount.current++;
    }
    return ( 
        <div>
            <input type="text" onChange={changingInput}/>
            <br></br>
            {value}
            <br></br>
            <p>Number of Renders: {renderCount.current}</p>
        </div>
     );
}
 
export default CountRender;