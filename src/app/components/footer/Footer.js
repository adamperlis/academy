import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';

const Footer = (props) => {
  return (
    <div style={{background: 'black', paddingTop: '20px'}}>
    <Grid>
    <Row className="show-grid">
    <Col xs={6} sm={6} md={6} lg={6} > 
  	
    
      <Link
        className="logo"
        to={'/'}>
        <img src={require('../../images/academy-logo-white.svg')} height="24px"/>
      </Link>

    

  	{props.children}

  	</Col>
    	<Col xs={6} sm={6} md={6} lg={6}>
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
          
        </ul>


        </Col> 

    </Row>

    <Row className="show-grid">
      <Col xs={12}>
      <Col xs={12}> 
        <hr/>
        <p className="copyright">@2016 Academy by Design LLC. All Rights Reserved</p>
      </Col>
      </Col>
    </Row>
    </ Grid>
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

	