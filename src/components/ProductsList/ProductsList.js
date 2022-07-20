import Product from "../Product/Product";
import React, { useState } from 'react';

const ProductsList = (props) => {
   
   const [products, setproducts] = useState([
      { name: "react js course", price: 69.99, id: 1,count:1 },
      { name: "node js course", price: 59.99, id: 2,count:1 },
      { name: "next js course", price: 99.99, id: 3,count:1 },
   ]);
   const deleteProduct= (id)=>{
      const filteredProduct = products.filter((product)=> product.id !== id)
      setproducts(filteredProduct);
   }
   const incrementProduct= (id)=>{
      const productsCopy = [...products]
      const incrementingProduct = productsCopy.find((product)=> product.id === id)
      incrementingProduct.count++;
      setproducts(productsCopy)
   }
   const decrementProduct= (id)=>{
      const productsCopy = [...products]
      const decrementingProduct = productsCopy.find((product)=> product.id === id)
      if(decrementingProduct.count===1){
         deleteProduct(id)
         return
      }
      decrementingProduct.count--;
      setproducts(productsCopy);
   }
   return ( 
      <div className="grid grid-cols-2 gap-6 md:gap-8 px-8">
        { products.map((product) => {
            return <Product onIncrement={incrementProduct} onDecrement={decrementProduct} onDelete={deleteProduct} name={product.name} key={product.id} id={product.id} count={product.count} price={product.price} />;
         })}
      </div>
    );
}
 
export default ProductsList;