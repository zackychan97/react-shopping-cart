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
// Step 6A -- Let's go ahead and bring our newly created `CartContext` into our `App.js`
import { CartContext } from './contexts/CartContext';


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

	const removeItem = cartIndex => {
		const newCart = cart.filter((product, index) => index !== cartIndex);
		setCart(newCart);
	}
	
	return (
		//step 3B -- Wrap all of your components/routes
		// inside of `ProductContext.Provider` component.
		//step 3C -- pass value to our provider
		// we will need our products and AddItem
		<ProductContext.Provider value = {{products, addItem}}>

		{/* Step 6B -- wrap all of our components inside of our `CartContext.Provider`. Make sure our `ProductContext.Provider` is still the root provider. 6C -- Now pass a value prop to our `CartContext.Provider`, this value prop is going to contain our `cart` state. Since we already did addItem im gonna do remove */}
		<CartContext.Provider value = {{cart, removeItem}}>

		<div className="App">
			{/* 6E -- Get rid of props in navigation as well */}
			<Navigation />

			{/* Routes */}
			<Route
				exact
				path="/"
				component = {Products}
			/>
			{/* 6D -- Refactor shoppingcart route */}
			<Route
				path="/cart"
				component = {ShoppingCart}
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
