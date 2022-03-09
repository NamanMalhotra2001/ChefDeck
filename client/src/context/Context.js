import { createContext, useEffect, useReducer } from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem('user')) || null,
	isFetching: false,
	error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
	// ########## initial ##########
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
	// ########## initial ##########

	// ########## localstorage ##########
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));
	}, [state.user]);
	// ########## localstorage ##########

	return (
		<Context.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</Context.Provider>
	);
};
