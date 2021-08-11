import React, { createContext, useReducer } from 'react';
import ItemReducer from './ItemReducer';

const INIT_STATE = [];

export const ItemContext = createContext(INIT_STATE);

export default function ItemContextProvider({ children }) {
	const [state, dispatch] = useReducer(ItemReducer, INIT_STATE);

	return (
		<ItemContext.Provider value={{ state, dispatch }}>
			{children}
		</ItemContext.Provider>
	);
}
