import React from "react";

const Product = (props) => {
   const { name, price } = props;
   return (
      <div className="">
         <h1>product {name}</h1>
         <h2>product {price} $</h2>
      </div>
   );
};

export default Product;
