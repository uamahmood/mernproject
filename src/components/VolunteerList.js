import React from 'react';
//import uuid from 'react-uuid';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import { ACCESS_TOKEN_NAME } from '../config/config';
import { withRouter, Link } from "react-router-dom";



class VolunteerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      volunteerEmail: '',
      volunteerLocation: 'nyc',
      volunteers: [],
      currentVolunteer: {},
      mode: 'submit'
    };
    this.deleteVolunteer = this.deleteVolunteer.bind(this);
    this.editVolunteer = this.editVolunteer.bind(this);
  }

  componentDidMount() {
    let { history } = this.props;
    if (!localStorage.getItem('token')) {
      return history.push('/login');
    }
    axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(res => {
      this.setState({ volunteers: res.data })
    });
  }

  submitVolunteer = (event) => {
    event.preventDefault();
    console.log(`You have made a request to submit ${this.state.firstName} ${this.state.lastName}`);
    console.log(this.state);
    axios.post('/api/volunteers', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      volunteerEmail: this.state.volunteerEmail,
      volunteerLocation: this.state.volunteerLocation
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
      .then((response) => {
        console.log(response);
        console.log(`You have successfully submitted ${this.state.firstName} ${this.state.lastName} ${this.state.volunteerEmail} ${this.state.volunteerLocation}`);
        console.log(this.state);
        axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(res => {
          this.setState({ volunteers: res.data })
        })
      })
      .catch((error) => {
        console.log(error);
        console.log(`There was an error submitting ${this.state.firstName} ${this.state.lastName} ${this.state.volunteerEmail}`);
        console.log(this.state);
        axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(res => {
          this.setState({ volunteers: res.data })
        })
      });

  }

  submitUpdate = (event) => {
    event.preventDefault();
    const { id } = this.state.currentVolunteer;
    console.log(`You have made a request to edit ${this.state.firstName} ${this.state.lastName} ${this.state.volunteerEmail} and this ${id}`);
    console.log(this.state);
    axios.put('/api/volunteers/' + id, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      volunteerEmail: this.state.volunteerEmail,
      volunteerLocation: this.state.volunteerLocation
    })
      .then((response) => {
        console.log(response);
        console.log(`You have successfully edited ${this.state.firstName} ${this.state.lastName} ${this.state.volunteerEmail}`);
        console.log(this.state);
        //get new list of updated volunteers and change mode back to submit
        axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(res => {
          this.setState({ volunteers: res.data })
        });
        this.setState({ mode: 'submit' });
      })
      .catch((error) => {
        console.log(error);
        console.log(`There was an error editing ${this.state.firstName} ${this.state.lastName} ${this.state.volunteerEmail}`);
        console.log(this.state);
        this.setState({ mode: 'submit' });
      });
    axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(res => {
      this.setState({ volunteers: res.data })
    })
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  deleteVolunteers = () => {
    axios.delete("/api/volunteers").then(res => {
      axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(volunteers => {
        this.setState({ volunteers: volunteers.data })
      })
    })
  }



  deleteVolunteer(id) {
    axios.delete('/api/volunteers/' + id)
      .then(res => {
        axios.get('/api/volunteers', { headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) } }).then(volunteers => {
          this.setState({ volunteers: volunteers.data })
          console.log(this.state);
        }).catch(error => console.log(error))
      }
      )
  }

  editVolunteer(id) {
    //console.log(id, 'From Volunteer id');
    this.setState({
      mode: 'update'
    })
    const volunteer = this.state.volunteers.find((volunteer) => volunteer.id === id);
    //console.log(volunteer)
    this.setState({
      currentVolunteer: volunteer,
      firstName: volunteer.firstName,
      lastName: volunteer.lastName,
      volunteerEmail: volunteer.volunteerEmail,
      volunteerLocation: volunteer.volunteerLocation
    });

  }



  render() {
    const { firstName, lastName, volunteerEmail, volunteerLocation, mode } = this.state
    let deleteVolunteer = (event) => {
      event.preventDefault();
      let id = event.target.id;
      console.log(id);
    }
    let editVolunteer = (event) => {
      event.preventDefault();
      let id = event.target.id;
      console.log(id);
    }
    return (
      <div className="App">
        <form onSubmit={mode == 'submit' ? this.submitVolunteer : this.submitUpdate}>
          <h1>VolunteerList</h1>
          <h3>Enter First name:</h3>
          <input
            type='text'
            value={firstName}
            name='firstName'
            onChange={this.myChangeHandler}
          />
          <h3>Enter Last name:</h3>
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={this.myChangeHandler}
          />
          <br />
          <h3>Enter Email:</h3>
          <input
            type='text'
            name='volunteerEmail'
            value={volunteerEmail}
            onChange={this.myChangeHandler}
          />
          <br />
          <h3>Select Volunteer Location:</h3>
         
          <select className='select' name='volunteerLocation' value={volunteerLocation} onChange={this.myChangeHandler}>
            <option value="nyc">NYC</option>
            <option value="sfo">SFO</option>
            <option value="chicago">Chicago</option>
            <option value="austin">Austin</option>
          </select>
          <br />
          <br />
          <input
            type='submit'
            value={mode === 'submit' ? 'Submit' : 'Update'}
          />
        </form>
        <br />
        <ul className="listItems">
          {this.state.volunteers.map((volunteer) => (<li className='listItem' key={`input-${volunteer.id + Math.random()}`}>
            
            <br/>
            First Name: {volunteer.firstName}
            <br/>
            Last Name: {volunteer.lastName}
            <br/>
            Email: {volunteer.volunteerEmail} 
            <br/>
            Location: {volunteer.volunteerLocation} 
            <br/>
            <button className="btn btn-light btn-sm mr-2" id={volunteer.id + 'edit'} onClick={() => this.editVolunteer(volunteer.id)}>Edit</button>
            <button className="btn btn-light btn-sm" id={volunteer.id + 'delete'} onClick={() => this.deleteVolunteer(volunteer.id)}>Delete</button></li>))}
            <br/>
            <br/>
            <br/>
        </ul>
        <br />
        <button onClick={this.deleteVolunteers}>Delete All</button>
        <br />
        <br />
      </div>
    );
  }
}

// key={`input-${volunteer.id+Math.random()} `}


export default withRouter(VolunteerList);

