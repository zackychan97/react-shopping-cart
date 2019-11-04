import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

//Step 7C -- import CartContext
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
	//Step 7D -- pass our `CartContext` to the `useContext` hook and assign it to a variable named cart. Remove props.
	const { cart } = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
