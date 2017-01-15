import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ArrowDown }    from '../../components';

const Hero = (props) => {
  return (
    <div>
    <Row className="show-grid hero">
    <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={2}> 
    <div className="block-reveal">
      	<h1>
      	Win
        </h1>
        <h1>
      	With
      	</h1>
    	<h2>
    	UX & 
      </h2>
      <h2>
      Design Thinking
    	</h2>
    </div>
    <div className="block-reveal">
  	<p className="main-subhead">
  	We bring UX & Design Thinking into organizations, teaching and empowering leaders to implement them into their products & services.
  	</p>
    </div>

  	{props.children}

  	</Col>
  	<Col xs={6} sm={9} md={8} lg={8}></Col> 
    </Row>

    <Row className="show-grid arrow">
      <Col xs={12} md={12}> 
        <ArrowDown />
      </Col>
    </Row> 
    </div>
    
  );
};

Hero.propTypes = {
  children: PropTypes.node
};

export default Hero;

	