import React, { Component } from 'react';
import { NavLink, BrowserRouter, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import AppContext from '../AppContext';

export default class Header extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.username = localStorage.getItem('username');
    window.addEventListener('click', this.closeMenu);
  }

  closeMenu = (event) => {
    console.log('event==>>', event.target.tagName)
    const dontClose = !this.context.isMenuOpen || 
      event.target.closest('#menus') ||
      ['SELECT', 'BUTTON', 'I', 'DIV'].includes(event.target.tagName)

    if (dontClose) {
      return;
    }

    this.context.setIsMenuOpen(true)
    setTimeout(
      () => this.context.setIsMenuOpen(false)
      , 10)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeMenu);
  }

  logoutUser = () => {
    localStorage.clear();
  }

  handleMenuStateChange = ({isOpen}) => {
    this.context.setIsMenuOpen(isOpen);
  }

  render() {
    const { isMenuOpen } = this.context;
    var styles = {
      bmBurgerButton: {
        position: 'absolute',
        width: '60px',
        height: '45px',
        right: '30px',
        top: '20px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '36px',
        width: '36px'
      },
      bmCross: {
        background: '#bdc3c7',
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: 0
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.3em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        //background: 'rgba(0, 0, 0, 0.3)'
      },
      bmItem: {
        // display: 'inline-block'
      }
    }
    return (
      <div className="Header container position-relative">
        <div className="App-left">
          <BrowserRouter>
          <NavLink to={localStorage.getItem('token') ? "/volunteerlist" : '/login'} style={{ display: 'inline-block' }}><img className="logo" width="150" alt="" height="150" src="https://res.cloudinary.com/dm9emvsjt/image/upload/v1600883096/VolunteerList2svg_te2kja.svg" /></NavLink>
          </BrowserRouter>
        </div>
        <div className="float-right menus" id="menus" >
          {localStorage.getItem('token') ?
            (
              <Menu isOpen={isMenuOpen} disableAutoFocus styles={styles} right onStateChange={this.handleMenuStateChange}>
                <Link to={`/user/${localStorage.getItem('username')}`}> <h3 className='username'>{localStorage.getItem('username')}</h3></Link>
                <Link to={`/user/${localStorage.getItem('username')}`} className="no-outline">
                   </Link>
                <hr />
                <Link to="/volunteerlist" id="home" className="menu-item--small" >Home/VolunteerList</Link>
                <Link to="/about" id="home" className="menu-item--small" >About</Link>
                <Link to="/login" onClick={this.logoutUser} >Logout</Link>
              </Menu>

            ) :
            (
              <Menu isOpen={isMenuOpen} disableAutoFocus styles={styles} onStateChange={this.handleMenuStateChange} right>
                <Link to="/register" onClick={this.logoutUser} >Register</Link>
                <Link to="/about" id="home" className="menu-item--small" >About</Link>
                <Link to="/login" onClick={this.logoutUser} >Log In</Link>
              </Menu>

            )
          }
        </div>
      </div>
    );
  }
}



