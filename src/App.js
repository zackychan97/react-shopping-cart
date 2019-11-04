import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Component Imports
// 	Components (note we have 3) and inside of their files, they all have
// 	to be passed one of our two states (products and cart).
//	Imagine how hard this would be to work with as we add more props
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


// Context Imports
// Step 3A -- Importing my productContext
import { ProductContext } from './contexts/ProductContext';
// Step 6A


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
		//step 3B -- Wrap all of your components/routes
		// inside of `ProductContext.Provider` component.
		//step 3C -- pass value to our provider
		// we will need our products and AddItem
		<ProductContext.Provider value = {{products, addItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component = {Products}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
		</ProductContext.Provider>
	);
}

export default App;
