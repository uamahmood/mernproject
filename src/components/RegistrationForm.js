import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config/config';
import { withRouter } from "react-router-dom";
import {ACCESS_TOKEN_NAME} from '../config/config';

function RegistrationForm(props) {
    const [state , setState] = useState({
        username : "",
        password : "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.username.length && state.password.length) {
            props.showError(null);
            const payload={
                "username":state.username,
                "password":state.password,
            }
            axios.post('/api/users/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        console.log('ypoo==>>', ACCESS_TOKEN_NAME, 'tokk==>>', response.data.token)
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        console.log('Registered new user.', payload);
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        props.updateTitle('VolunteerList')
        props.history.push('/volunteerlist');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        sendDetailsToServer();   
        
    }
    return (
        <div className="logo-shift wideFix App-left">
          <h1>Register</h1>
          <br />
          <h4>Welcome to VolunteerList, a MERN website to volunteer during covid.</h4>
          <hr/>
          <form>
          <label htmlFor="exampleInputusername1">Username</label>
            <div className="input-group">
            <input type="username" 
                         className="form-control" 
                         id="username" 
                         aria-describedby="usernameHelp" 
                         placeholder="Enter username" 
                         value={state.username}
                         onChange={handleChange}
                  />
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" 
                         className="form-control" 
                         id="password" 
                         placeholder="Password"
                         value={state.password}
                         onChange={handleChange} 
                  />
               </div>
               <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
          </form>
          <div>
            <br/>
            <h4>Don't have an account yet? <a href="/login">Login</a> here, free.</h4><br/>
          
            <br/>
          </div>
        </div>
      )
}

export default withRouter(RegistrationForm);
