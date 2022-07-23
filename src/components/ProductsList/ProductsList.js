import Product from "../Product/Product";


const ProductsList = (props) => {
	
	const {products,onDecrement,onDelete,onIncrement}=props
	return (
		<div>
			{products.length ? (
				<div className="grid grid-cols-2 gap-6 md:gap-8 px-8">
               {
                  products.map((product) => {
                     return (
                        <Product
                           onIncrement={onIncrement}
                           onDecrement={onDecrement}
                           onDelete={onDelete}
                           name={product.name}
                           key={product.id}
                           id={product.id}
                           count={product.count}
                           price={product.price}
                        />
                     );
                  })
               }
            </div>
			) : (
				<div className="text-center pt-5 text-xl text-slate-700">no product in cart</div>
			)}
		</div>
	);
};

export default ProductsList;
