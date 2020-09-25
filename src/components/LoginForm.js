import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config/config';
import { withRouter } from "react-router-dom";
import {ACCESS_TOKEN_NAME} from '../config/config';

function LoginForm(props) {
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

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "username":state.username,
            "password":state.password,
        }
        axios.post('/api/users/login', payload)
            .then(function (response) {
                console.log('res logins===>>>', response.data)
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    redirectToHome();
                    console.log('logged in');
                    props.showError(null)
                } else if(response.status === 204){
                    props.showError("Username and password do not match");
                } else{
                    props.showError("Username does not exists");
                    console.log("Username does not exist");
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error);
                console.log('error logging in');
            });
    }
    const redirectToHome = () => {
        props.updateTitle('VolunteerList')
        props.history.push('/volunteerlist');
    }
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }

        return (
      <div className="logo-shift wideFix App-left">
        <h1>Login</h1>
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
                >Login</button>
        </form>
        <div>
          <br/>
          <h4>Don't have an account yet? <a href="/register">Register</a> here, free.</h4><br/>
        
          <br/>
        </div>
      </div>
    )
  

}

export default withRouter(LoginForm);
