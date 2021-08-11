import { ADD_TO_CART } from '../contextConstant';

const ItemReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_TO_CART:
			return [...state, payload];

		default:
			return state;
	}
};

export default ItemReducer;
