import { useState } from "react";
const fib = (n) =>{
    if (n <= 1){
        return n;
    }else{
        return fib(n-1) + fib(n-2);
    }
}

const FibSeq = () => {
    const [num, setNum] = useState(0);
    const fibNum = fib(num);
    return ( 
        <div>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}></input>
            <p>Answer:{fibNum}</p>
        </div>
     );
}
// 1 1 2 3 5 8 13 21 34 55 89 144 
export default FibSeq;