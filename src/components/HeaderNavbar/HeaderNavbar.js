
const HeaderNavbar = (props) => {
	const {products}=props
	return (
		<header className="py-3 flex justify-center items-center">
			<h1 className="p-10 text-3xl font-bold text-slate-900">
				shopping app
			</h1>
			<span className="text-xl font-bold">{products.filter((p)=> p.count>0).length}</span>
		</header>
	);
};

export default HeaderNavbar;
