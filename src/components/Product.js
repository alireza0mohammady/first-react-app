import React from "react";

const Product = (props) => {
   const { name, price, id } = props;
   return (
      <div key={id}>
         <h1>product {name}</h1>
         <h2>product {price} $</h2>
      </div>
   );
};

export default Product;
