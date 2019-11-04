import React, {useContext} from 'react';

// Step 7A -- Import CartContext
import { CartContext } from '../contexts/CartContext';

// Components
import Item from './ShoppingCartItem';



const ShoppingCart = () => {
	//Step 7B -- Now in the component, pass `CartContext` to the `useContext` hook and assign it to a variable named cart. Then remove props
	const { cart, removeItem } = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map((item, index) => (
				<Item key={index} removeItem={() => removeItem(index)} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
