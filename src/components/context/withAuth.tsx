import React from 'react';
import Context from './AuthContext';

export function withAuthContext(Component: any) {
	return function WrapperComponent(props: any) {
		return (
			<Context.Consumer>
				{state => <Component {...props} context={state} />}
			</Context.Consumer>
		);
	};
}

export default withAuthContext;
