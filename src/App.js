import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import ProductsList from "./components/ProductsList/ProductsList";
import React, { useState } from 'react';

// import HookCounter from "./components/hookcounter/HookCounterClass";
// import HookCounterFunctional from "./components/hookcounter/HookCounterFunctional";
// import StateObjectUpdate from "./components/StateObjectUpdate/StateObjectUpdate";

const App = () => {

	const [products, setproducts] = useState([
		{ name: "react js course", price: 69.99, id: 1, count: 1 },
		{ name: "node js course", price: 59.99, id: 2, count: 1 },
		{ name: "next js course", price: 99.99, id: 3, count: 1 },
	]);

	const deleteProduct = (id) => {
		const filteredProduct = products.filter((product) => product.id !== id);
		setproducts(filteredProduct);
	};
	const incrementProduct = (id) => {
		const productsCopy = [...products];
		const incrementingProduct = productsCopy.find((product) => product.id === id);
		incrementingProduct.count++;
		setproducts(productsCopy);
	};
	const decrementProduct = (id) => {
		const productsCopy = [...products];
		const decrementingProduct = productsCopy.find((product) => product.id === id);
		if (decrementingProduct.count === 1) {
			deleteProduct(id);
			return;
		}
		decrementingProduct.count--;
		setproducts(productsCopy);
	};

	return (
		<div className="h-screen bg-stone-50">
			<HeaderNavbar products={products}/>
			<div className="flex flex-col" id="products">
				<ProductsList products={products} onDelete={deleteProduct} onIncrement={incrementProduct} onDecrement={decrementProduct} />
			</div>
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
