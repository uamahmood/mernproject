import React, { Component } from 'react';

export default class AboutSFO extends Component {
 
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
        <h1>San Francisco Volunteer Opportunities</h1>
       <br/>
       <br/>
       <img onClick={()=>this.navigateToSFO()} src='https://res.cloudinary.com/dm9emvsjt/image/upload/v1600959044/sfosvg_v13d9y.svg' className='sfoImage image'/>
       <br/>
        <br/>
        <h5>In San Francisco, one can volunteer at one of the following locations.  Information taken from <a href='https://success.ucsf.edu/volunteer'>https://success.ucsf.edu/volunteer</a>.</h5>
     <h5>
       <br/>
     COVID Workforce Platform:<br/>
UCSF students who have occupational health clearance may volunteer for work in clinical settings and help ease the strain on health care workers. Ensure that you meet the qualifications listed in the job opportunity, and, since there may be training required, please consider signing up for at least two shifts. (The link above will only work if you have occupational health clearance.) Coordinated by the School of Medicine.
<br/>
<br/>
Non-clinical Roles:<br/>
Students may volunteer for a variety of vital non-clinical services, e.g. donating blood, delivering meals to the elderly, or helping with research efforts. Coordinated by the School of Medicine.
<br/>
<br/>
Provide Dependent Care for Health Care Workers:<br/>
With schools and daycare centers closed across the Bay Area, many frontline health care workers need alternative arrangements for child care or elder care. Students can help fill this crucial need by signing up with SitterCity. To express interest, follow these instructions. Coordinated by Campus Life Services/Family Services.
     </h5>
      </div>

    );
  }
}