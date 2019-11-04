import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// 	Components (note we have 3) and inside of their files, they all have
// 	to be passed one of our two states (products and cart).
//	Imagine how hard this would be to work with as we add more props
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	//1st state property products keeps track of products
	const [products] = useState(data);
	//2nd state property cart keeps track of whats in cart
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		//step 1
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
	);
}

export default App;
