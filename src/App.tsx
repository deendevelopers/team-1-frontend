import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IonApp, IonPage, IonRouterOutlet } from '@ionic/react';
import LoginScreen from './pages/LoginScreen';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">
          <IonApp>
            <IonPage id="main">
              <IonRouterOutlet>
                <Route exact path="/" component={LoginScreen} />
              </IonRouterOutlet>
            </IonPage>
          </IonApp>
        </div>
      </Router>
    );
  }
}

export default App;
