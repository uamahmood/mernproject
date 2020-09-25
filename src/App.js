import React, { useState } from 'react';
import './App.css';
import Test from './components/Test';
import About from './components/About';
import AboutNYC from './components/AboutNYC';
import AboutSFO from './components/AboutSFO';
import AboutChicago from './components/AboutChicago';
import AboutAustin from './components/AboutAustin';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import VolunteerList from './components/VolunteerList';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent';
import AppContext from './AppContext';

function App() {
  const [title, updateTitle] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <AppContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <div>
        <Router>
          <Header />
          <div className="App">
            <div className="container">
              <Switch>
                <Route path="/" exact={true} render={props => <RegistrationForm {...props} showError={updateErrorMessage} updateTitle={updateTitle} /> } />
                <Route path="/register" render={props => <RegistrationForm {...props} showError={updateErrorMessage} updateTitle={updateTitle} /> } />
                <Route path="/login" render={props => <LoginForm {...props} showError={updateErrorMessage} updateTitle={updateTitle} /> } />
                <Route path="/volunteerlist" component={VolunteerList} />
                <Route path="/about" component={About} />
                <Route path="/aboutnyc" component={AboutNYC} />
                <Route path="/aboutsfo" component={AboutSFO} />
                <Route path="/aboutchicago" component={AboutChicago} />
                <Route path="/aboutaustin" component={AboutAustin} />
                <Route path="/home" component={Home} />
                {/* <Route path="/volunteerlist" component={VolunteerList} /> */}

              </Switch>
              <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />

            </div>

            <br />
            <br />
            <br />




          </div>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;