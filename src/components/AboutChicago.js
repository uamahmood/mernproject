import React, { Component } from 'react';

export default class AboutChicago extends Component {
 

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
        <h1>Chicago Volunteer Opportunities</h1>
       <br/>
       <br/>
       <img onClick={()=>this.navigateToChicago()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959043/chicagosvg_u6hmzb.svg' className='chicagoImage image'/>
      <br/>
      <br/>
        
         <h5>In Chicago, one can volunteer at one of the following locations.  Information taken from <a href='https://publichealth.uic.edu/uic-covid-19-public-health-response/covid-19-volunteer-opportunities/'>https://publichealth.uic.edu/uic-covid-19-public-health-response/covid-19-volunteer-opportunities/</a>.</h5>
     <br/>
     <h5>
     UIC’s COVID-19 Community Engagement Strikeforce:<br/>
     UIC’s COVID-19 Community Engagement Strikeforce aims to provide an organized COVID-19 response to support our community organization partners. As the world rapidly changes with COVID-19, the Strikeforce is appealing to students to help support our work. Potential projects include making phone calls, collecting and organizing data, and grant writing. Hours will vary from project to project but are flexible to volunteers’ schedules. Students can find detailed information here. Together, we can make a difference across Chicago and help those most impacted.
    <br/>
    <br/>
    The Chesterfield Community Council:<br/>
    The Chesterfield Community Council seeks volunteers to assist with training council staff with running secure Zoom community meetings.  Chesterfield is a current COVID-19 hot spot.
      
    
One or two volunteers or needed, and the total time commitment is expected to be two to three hours.

Contact
Lori Burns
npslori@yahoo.com
(773) 507-3208
<br/>
<br/>
Sage Kim, PhD:<br/>
Sage Kim, PhD, associate professor of health policy and administration, needs three volunteers to help make PPE packages for the community.  This project aids community outreach with Mile Square Health Centers.

Contact
Sage Kim
skim49@uic.edu
     </h5>
      </div>

    );
  }
}