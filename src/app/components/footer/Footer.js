import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';

const Footer = (props) => {
  return (
 
    <Row className="show-grid black-footer">
  
    <Col xs={6}> 
  	
    
      <Link
        className="logo"
        to={'/'}>
        Academy
      </Link>

    

  	{props.children}

  	</Col>
  	<Col xs={6}>
      <ul>
        <li><Link
        className="links"
        to={'/careers'}>
        CAREERS
        </Link></li>
        <li><Link
        className="links"
        to={'/contact'}>
        CONTACT US
        </Link></li>
        <li><Link
        className="links"
        to={'/about'}>
        ABOUT
        </Link></li>
        
      </ul>


    </Col> 

      
        <Row className="show-grid">
          <Col xs={12}> 
            <hr/>
            <p className="copyright">@2016 Academy by Design LLC. All Rights Reserved</p>
          </Col>
        </Row>
      
    </Row>
    
    
  );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;

	