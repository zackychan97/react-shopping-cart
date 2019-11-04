//Step 4A -- import our useContext as well as productContext
import React, { useContext } from 'react';


// Components
import Product from './Product';
//Step 4A -- import our useContext as well as productContext
import { ProductContext } from '../contexts/ProductContext';

//Step 4C remove props from function parameter and replace with ()
const Products = () => {
	//Step 4B -- In the component, call the `useContext` hook and pass in the context object we want to use into it.
	// ProductContext is the context object we want to use into it
	const {products, addItem} = useContext(ProductContext)
	return (
		<div className="products-container">
		{/*Step 4C get rid of props on props.product.map (destructuring) */}
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					//Step 4C get rid of props on props.addItem (destructuring)
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
