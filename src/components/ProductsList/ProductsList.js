import Product from "../Product/Product";
import React, { useState } from 'react';

const ProductsList = (props) => {
   
   const [products, setproducts] = useState([
      { name: "react js course", price: 69.99, id: 1 },
      { name: "react js course", price: 59.99, id: 2 },
      { name: "react js course", price: 99.99, id: 3 },
   ]);
   return ( 
      <div>
        { products.map((product) => {
            return <Product name={product.name} key={product.id} price={product.price} />;
         })}
      </div>
    );
}
 
export default ProductsList;