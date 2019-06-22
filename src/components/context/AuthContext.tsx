import { createContext } from 'react';

type ContextProps = {
	authenticated: boolean;
	handleLogin: Function;
	handleLogout: Function;
};

const Context = createContext<Partial<ContextProps>>({});

export default Context;
