import React from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
const Product = (props) => {
	const { name, price, id, count, onDelete, onIncrement, onDecrement } = props;
	return (
		<div className="bg-white text-slate-900 border-2 border-gray-400 p-8 rounded-2xl">
			<h1 className="text-2xl mb-4">product {name}</h1>
			<h2 className="text-lg mb-2">product {price} $</h2>
			<div className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-between items-center">
				<div className="flex w-full min-w-max justify-around lg:w-min gap-x-2 lg:gap-x-4 items-center">
					<span className="w-8 h-8 grid place-content-center bg-purple-300 rounded-full p-1">
						{count}
					</span>
					<button
						onClick={() => onIncrement(id)}
						className={`border-2 border-slate-400 bg-stone-200  rounded-md p-2`}>
						<BiPlus />
					</button>
					<button
						onClick={() => onDecrement(id)}
						className={`border-2 border-gray-300 rounded-md p-2 ${
							count === 1 ? "text-red-700 border-red-700" : "border-slate-300"
						}`}>
						{count === 1 ? <BiTrash /> : <BiMinus />}
					</button>
				</div>
				<button
					onClick={() => onDelete(id)}
					className="p-2 border-2 rounded-md text-slate-800 self-center">
					Delete
				</button>
			</div>
		</div>
	);
};

export default Product;
