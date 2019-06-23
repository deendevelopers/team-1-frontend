import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import MosqueList from './pages/MosqueList';
import MosqueScreen from './pages/MosqueScreen';
import AuthProvider from './components/context/AuthProvider';
import withAuthContext from './components/context/withAuth';
import FeedScreen from './pages/FeedScreen';
import HomeScreen from './pages/HomeScreen';

class App extends Component {
	render() {
		return (
			<AuthProvider>
				<Router>
					<div className="App">
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/login" component={LoginScreen} />
						<Route exact path="/feed" component={FeedScreen} />
						<Route exact path="/register" component={RegisterScreen} />
						<Route exact path="/list" component={MosqueList} />
						<Route exact path="/mosque/:id" component={MosqueScreen} />
					</div>
				</Router>
			</AuthProvider>
		);
	}
}

export default withAuthContext(App);
