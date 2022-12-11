import React from "react";

const initialState = {
	accountId: 1,
	personId: 0,
	action: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "SET_ACCOUNT":
			return {
				...state,
				accountId: action.payload,
			};
		case "SET_PERSON":
			return {
				...state,
				personId: action.payload,
			};
		case "ACTION":
			return {
				...state,
				action: state.action + 1,
			};
		default:
			return state;
	}
}

export const AppContext = React.createContext();

export function AppProvider({ children }) {
	const value = React.useReducer(reducer, initialState);
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
