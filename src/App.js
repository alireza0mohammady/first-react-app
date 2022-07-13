import React from "react";
import Product from "./components/Product";
const App = () => {
   const products = [
      { name: "react js course", price: 69.99,id:1 },
      { name: "node js course", price: 59.99,id:2 },
      { name: "next js course", price: 99.99,id:3 },
   ];
   return <div className="container" id="products">
      {products.map((product)=>{
         return <Product name={product.name} price={product.price} kay={product.id}/>
      })}
   </div>;
};

export default App;
