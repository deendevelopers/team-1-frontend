import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={LoginScreen} />
				<Route exact path="/register" component={RegisterScreen} />
			</Router>
		);
	}
}

export default App;
