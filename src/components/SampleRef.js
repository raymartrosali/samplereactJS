import { useEffect, useRef } from "react";

const SampleFocus = () => {
    const inputReference = useRef();
    // useEffect( () =>{
    //     inputReference.current.focus()
    // }
    // );
    const sampleRefFunction = () => {
        alert(inputReference.current.value);
        
    };
    return ( 
        <div>
            
            <input  ref={inputReference} className="HELLO" type="text" value="123"/>
            <br></br><br></br>
            <button onClick={sampleRefFunction}>Sample Button</button>
        </div>
     );
}
 
export default SampleFocus;