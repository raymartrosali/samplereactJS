import { useCallback, useState } from "react";
import Answer from "./Answer";

const MultTable = () => {
    const [num, setNum] = useState(0);
    const [newNum, incrementingNum] = useState(0);
    const getItems = useCallback(() =>{
        return [num, num *2, num *3, num *4, num *5, num *6, num *7, num *8, num *9, num *10];
    }, [num])
    return ( 
        <div>
            <h1>{newNum}</h1>
            <input type="number" value={num} onChange= {(e) => setNum(Number(e.target.value))}></input>
            <button onClick={() => incrementingNum(prev => prev+ 2) }>Click me please!!</button>
            <Answer getItems={getItems}></Answer>
        </div>
     );
}
 
export default MultTable;