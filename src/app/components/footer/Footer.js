import React, {PropTypes, Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import { AppBar } from 'material-ui'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme' 

const Footer = (props) => {
  return (

    <AppBar
    className="black-footer" 
    style={{
      height:'163px',
      background:'black',
    }} 
    iconStyleRight={{
      marginTop:'20px',
      marginRight:'0px',
      flexGrow:'1',
    }}
    titleStyle={{fill:'rbg(255,255,255)',}}
    showMenuIconButton={false} 
    title={
      <Link
      className="nav-logo"
       to={'/'}>
      <img src={'../public/assets/images/academy-logo-white.svg'} height="24px"/>
      </Link>}
    iconElementRight={
          <ul>
            <li><Link
            className="links"
            to={'/careers'}>
            CAREERS
            </Link></li>
            <li><Link
            className="links"
            to={'/ContactUs'}>
            CONTACT US
            </Link></li>
        </ul>}
      >
      </AppBar>
  );
};

export default Footer;

	