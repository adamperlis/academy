import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ArrowDown }    from '../../components';

const Hero = (props) => {
  return (
 
    <Row className="show-grid hero">
    <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={2}> 
  	
  	<h1>
  	Win
  	With
  	</h1>
  	<h2>
  	UX & Design Thinking
  	</h2>

  	<p className="main-subhead">
  	We bring UX & Design Thinking into organizations, teaching and empowering leaders to implement them into their products & services.
  	</p>

  	{props.children}

  	</Col>
  	<Col xs={6} sm={9} md={8} lg={8}></Col> 

      <Row className="show-grid hero">
        <Col xs={12} md={12}> 
          <ArrowDown />
        </Col>
      </Row> 

    </Row>
    
    
  );
};

Hero.propTypes = {
  children: PropTypes.node
};

export default Hero;

	