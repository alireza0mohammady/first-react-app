import React from "react";

const Product = (props) => {
	const { name, price, id, count ,onDelete,onIncrement,onDecrement} = props;
	return (
		<div className="bg-white text-slate-900 border-2 border-gray-400 p-8 rounded-2xl">
			<h1 className="text-2xl mb-4">product {name}</h1>
			<h2 className="text-lg mb-2">product {price} $</h2>
			<div className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-between items-center">
				<div className="flex w-full min-w-max justify-around lg:w-min gap-x-2 lg:gap-x-4 items-center">
					<span className="w-8 h-8 grid place-content-center bg-purple-300 rounded-full p-1">
						{count}
					</span>
					<button onClick={()=>onIncrement(id)} className="border-2 bg-stone-200 border-gray-400 rounded-md px-2 py-1">
						increment
					</button>
					<button onClick={()=>onDecrement(id)} className="border-2 border-gray-300 rounded-md px-2 py-1">
						decrement
					</button>
				</div>
				<button onClick={()=>onDelete(id)} className="px-2 py-1 border-2 rounded-md text-slate-800 self-center">Delete</button>
			</div>
		</div>
	);
};

export default Product;
