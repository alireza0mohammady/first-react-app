import React, { useState } from "react";

const HookCounterFunctoinal = () => {
   const [ count, setcount ] = useState(0);
   function plusOne() {
      setcount((pervstate) => {return pervstate+1});
   }
   function plusTwo() {
      for (let index = 0; index < 2; index++) {
         setcount((pervstate) => {return pervstate+1});
      }
   }
   function plusFive() {
      for (let index = 0; index < 5; index++) {
         setcount((pervstate) => {return pervstate+1});
      }
   }
   return (
      <div>
         <h2>count is {count}</h2>
         <button onClick={plusOne}>plus one</button>
         <button onClick={plusTwo}>plus two</button>
         <button onClick={plusFive}>plus five</button>
      </div>
   );
};

export default HookCounterFunctoinal;
