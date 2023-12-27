import React, { useState } from 'react';
import { Button } from 'antd';
import "./App.css";

const Counter = () => {
 const [count, setCount] = useState(0);

 const incrementCounter = () => {
    setCount(count + 1);
 };

 const decrementCounter = () => {
    setCount(count - 1);
 };

 return (
    <div id= "container">
      <div id="counter">
      <h1>Counter: {count}</h1>
      <div id="button">
      <Button onClick={incrementCounter}>Increment</Button>
      <Button onClick={decrementCounter}>Decrement</Button>
      </div>
      </div>
      
      
    </div>
 );
};

export default Counter;