import { Component } from "react";

class HookCounter extends Component {
   state = {count:0};
   plusOne =()=>{
      this.setcount((pervstate) => {return pervstate.count+1});
   }
   plusTwo =()=>{
      for (let index = 0; index < 2; index++) {
         this.setcount((pervstate) => {return pervstate.count+1});
      }
   }
   plusFive =()=>{
      for (let index = 0; index < 5; index++) {
         this.setcount((pervstate) => {return pervstate.count+1});
      }
   }
   render(){
      return(
         <div>
         <h2>count is {this.state.count}</h2>
         <button onClick={this.plusOne}>plus one</button>
         <button onClick={this.plusTwo}>plus two</button>
         <button onClick={this.plusFive}>plus five</button>
      </div>
      )
   }
}

export default HookCounter;
