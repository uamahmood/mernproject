import React, { Component } from 'react';

export default class AboutNYC extends Component {

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
        <h1>New York City Volunteer Opportunities</h1>
       <br/>
       <br/>
       <img onClick={()=>this.navigateToNYC()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959045/nycsvg_qv2ayo.svg' className='nycImage image'/>
       <br/>
        <br/>
        <h5>In NYC, one can volunteer at one of the following locations.  Information taken from <a href='https://www.hfny.org/pages/covid-19-urgent-needs'>https://www.hfny.org/pages/covid-19-urgent-needs</a>.</h5>
        <h5>
        <br/>
        Brooklyn Arab American Friendship Center:
        <br/>
Virtual Volunteers needed: Teach ESL classes weekly with 8-12 students on Zoom. The schedule is flexible as long as it is after 2 p.m.
<br/>
        <br/>
       Defy Ventures
Virtual Volunteers needed: 
      <br/>
Sign up to attend a virtual event with Defy Ventures, which provides career readiness and entrepreneurship training to formerly incarcerated individuals. Events range from Book Clubs, Community Building, and Business Coaching Nights.
        <br/>
        <br/>
        Expect Hope:
        <br/>
Donations needed: 
Multiple items needed for expectant women in NYC, including crib bumper pads, laptops, cleaning items, and more. See their Amazon wish list. For more details, email: emilyprins@expecthope.org
        <br/>
        </h5>
      </div>

    );
  }
}