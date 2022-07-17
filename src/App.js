import React, { Component, useState } from "react";
import Product from "./components/Product/Product";
import HookCounter from "./components/hookcounter/HookCounterClass";
import HookCounterFunctional from "./components/hookcounter/HookCounterFunctional";
import StateObjectUpdate from "./components/StateObjectUpdate/StateObjectUpdate";
const App = () => {
   // const [stateData, setproducts] = useState([
   //    { name: "react js course", price: 69.99, id: 1 },
   //    { name: "react js course", price: 59.99, id: 2 },
   //    { name: "react js course", price: 99.99, id: 3 },
   // ]);

   // const clickHandler = ()=>{
   //    setproducts(
   //       [
   //          { name: "react js course", price: 169.99, id: 1 },
   //          { name: "react js course", price: 159.99, id: 2 },
   //          { name: "react js course", price: 199.99, id: 3 },
   //       ]
   //    )
   // }

   return (
      <div className="container" id="products">
         {/* {stateData.map((product) => {
            return <Product name={product.name} key={product.id} price={product.price} />;
         })}
         <button onClick={clickHandler}>change the price</button> */}
         <StateObjectUpdate/>
      </div>
   );
};

// class App extends Component {
//    state = {
//       products: [
//          { name: "react js course", price: 69.99, id: 1 },
//          { name: "node js course", price: 59.99, id: 2 },
//          { name: "next js course", price: 99.99, id: 3 },
//       ],
//    };

//    clickHandler = () => {
//       this.setState({
//          products: [
//             { name: "react js course", price: 169.99, id: 1 },
//             { name: "node js course", price: 159.99, id: 2 },
//             { name: "next js course", price: 199.99, id: 3 },
//          ],
//       });
//    };

//    render() {
//       return (
//          <div className="container" id="products">
//             {this.state.products.map((product) => {
//                return (
//                   <Product name={product.name} key={product.id} price={product.price} />
//                );
//             })}
//             <button onClick={this.clickHandler}>change the price</button>
//          </div>
//       );
//    }
// }

export default App;
