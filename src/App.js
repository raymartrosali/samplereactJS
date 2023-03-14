import logo from './logo.svg';
import './App.css';
import SampleForm from './components/SampleForm';
import {useState, useEffect } from "react";
import Timer from './components/Timer';
import CartSample from './components/CartSample';
import SampleFocus from './components/SampleRef';
import CountRender from './components/countRender';
import StopWatch from './components/StopWatch';
import StateCounter from './components/stateCounter';
import ReducerCount from './components/reducerCounter';
import MultTable from './components/MultiplicationTable';
import FibSeq from './components/FibSequence';
function App() {
  const [data, setData] = useState({});
  const updateData = (FormData) => {
    setData(FormData);
  }
  // useEffect(()=>{
  //   console.log("Wow it worked");
  // });
  return (
    <div className="App">
      <FibSeq></FibSeq>
      <MultTable></MultTable>
      <ReducerCount></ReducerCount>
      <StateCounter></StateCounter>
      <StopWatch></StopWatch>
      <CountRender></CountRender>
      {/* <SampleFocus></SampleFocus> */}
      <CartSample></CartSample>
      <Timer></Timer>
      <SampleFocus></SampleFocus>
      {/* <SampleForm callback={updateData}></SampleForm>
      <h1>First Names: {data["data1"]}</h1><br></br>
      <h1>Last Name: {data["data2"]}</h1><br></br> */}
    </div>
  );
}

export default App;
