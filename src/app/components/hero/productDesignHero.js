import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ArrowDown }    from '../../components';

const Hero = (props) => {
  return (
 
    <Row className="show-grid product-design-hero">
    <Col xs={6}> 
  	
  	<h1>
  	Product
  	</h1>
  	<h2>
  	Design & Development
  	</h2>

  	{props.children}

  	</Col>
  	<Col xs={6}></Col>  

    </Row>
    
    
  );
};

Hero.propTypes = {
  children: PropTypes.node
};

export default Hero;

	