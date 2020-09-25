import React, { Component } from 'react';

export default class AboutAustin extends Component {
 
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
       <h1>Austin Volunteer Opportunities</h1>
       <br/>
       <br/>
       <img onClick={()=>this.navigateToAustin()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959044/austinsvg_vve5yt.svg' className='austinImage image'/>
        <br/>
        <br/>
        <h5>In Chicago, one can volunteer at one of the following locations.  Information taken from <a href='https://www.austinchamber.com/about/austin-gives/volunteer-opportunities'>https://www.austinchamber.com/about/austin-gives/volunteer-opportunities</a>.</h5>
      <br/>
      <h5>
      Age of Central Texas:<br/>
Volunteers are very important to the work of AGE of Central Texas! Volunteers enhance the lives of the older adults and caregivers that we serve, help our operations to run at their best, and sustain the culture of service and goodwill that AGE has been part of since 1986.
     <br/>
     <br/>
     Austin Angels:<br/>
Mentoring Youth in Care + Aged-out Youth: Mentors will build relationships and teach life skills with the hope of creating positive outcomes and independent living skills for youth in foster care. Mentors will work closely with a youth (ages 11-21), and must be 22+ and have a significant age gap between themselves and the youth. Click here to apply to be a mentor.
<br/>
     <br/>
     Central Texas Food Bank:<br/>
We have primarily weekday and select weekend opportunities—perfect for individuals and groups—helping prepare food donations for distribution and distributing food at mobile food pantries.
<br/>
     <br/>
     COVID-19 ATX Exchange: <br/>
Exchange is a platform that brings together experts, innovators, and leaders to create community solutions to critical COVID-19 needs. How it works: Someone in the community submits a need. Then the community comes up with a creative solution. People can respond to specific needs, or contribute raw materials, and if you have ideas and materials that you think could help then you can simply submit a solution.
<br/>
     <br/>
     </h5>
      </div>

    );
  }
}