import { ADD_TO_CART } from '../contextConstant';

export const addToCart = (item) => ({
	type: ADD_TO_CART,
	payload: item,
});
