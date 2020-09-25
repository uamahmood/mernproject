import React, { Component } from 'react';

export default class About extends Component {

  navigateToAbout = () => {
    this.props.history.push('/about');
  }
  
  navigateToNYC = () => {
    this.props.history.push('/aboutnyc');
    
  }

  navigateToSFO = () => {
    this.props.history.push('/aboutsfo');
  }

  navigateToChicago = () => {
    this.props.history.push('/aboutchicago');
  }

  navigateToAustin = () => {
    this.props.history.push('/aboutaustin');
  }

  render() {
    return (
      <div>
        <div className='aboutTop'>
        <h1>About VolunteerList</h1>
        <h5>VolunteerList was founded by a volunteer with a passion for helping his community.</h5>
        <h5>VolunteerList allows users to register their name, email, and preferred location to be contacted about Covid19 volunteer opportunities.</h5>
        <h5>Registered users who are logged in can view the VolunteerList, while all users can view the About, Login, and Register pages. </h5>
        <h5>Please click on a location below to learn more about Covid19 volunteer opportunities in that area.</h5>
        </div>
        <br />
        <h2>VolunteerList Locations:</h2>
      <br/>
       <div className='locationsContainer'><h4 onClick={()=>this.navigateToAbout()} className='location'>All</h4><h4 onClick={()=>this.navigateToNYC()} className='location'>NYC</h4><h4 onClick={()=>this.navigateToSFO()} className='location'>SFO</h4><h4 onClick={()=>this.navigateToChicago()} className='location'>Chicago</h4><h4 onClick={()=>this.navigateToAustin()} className='location'>Austin</h4></div>
      <br/>
      <h2>New York City</h2>
      <img onClick={()=>this.navigateToNYC()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959045/nycsvg_qv2ayo.svg' className='nycImage image'/>
      <br/>
      <br/>
      <h2>San Francisco</h2>
      <img onClick={()=>this.navigateToSFO()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959044/sfosvg_v13d9y.svg' className='sfoImage image'/>
      <br/>
      <br/>
      <h2>Austin</h2>
      <img onClick={()=>this.navigateToAustin()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959044/austinsvg_vve5yt.svg' className='austinImage image'/>
      <br/>
      <br/>
      <h2>Chicago</h2>
      <img onClick={()=>this.navigateToChicago()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959043/chicagosvg_u6hmzb.svg' className='chicagoImage image'/>
      <br/>
      <br/>
      </div>

    );
  }
}