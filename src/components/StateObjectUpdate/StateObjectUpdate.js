import React, { useState } from 'react';

const StateObjectUpdate=()=>{
   const [userData,setUserData] = useState({firstName:'',lastName:''})
   function firstNameChangeHandler(e){
      setUserData(
          {...userData,firstName:e.target.value}
      );
   };
   function lastNameChangeHandler(e){
      setUserData(
         {...userData,lastName:e.target.value}
     );
   }
   return(
      <div>
         <input type="text" onChange={firstNameChangeHandler}/>
         <input type="text" onChange={lastNameChangeHandler}/>
         <p>{JSON.stringify(userData)}</p>
      </div>
   )
}

export default StateObjectUpdate