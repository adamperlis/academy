import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';


const Work = (props) => {
  return (

    <Row className="show-grid our-work">
    <Col className="wrapper" xs={12} sm={12} md={12} lg={12}>
    <div className="vertical-wrapper">
        <div className="vertical-middle">
    <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={2}> 

    <h3>
    Our
    </h3>
    <h4>
    Work
    </h4>

    <p className="subhead">
        Our team has worked with some of the most recongizable brands in the world to design and develop best in class products and services. Take a look to see how we do it.
    </p>    
 {props.children}

     <Link
        className="btn"
        to={'/Work'}>
        See Our Work
    </Link>

    </Col>
    <Col xs={6} sm={3} mdOffset={1} md={3} lgOffset={2} lg={3}>
    <img src="/public/assets/images/productGraphic.svg" width="100%" className=""/>
    </Col>
    </div>
    </div>
    </Col> 
    </Row>

    );
};

Work.propTypes = {
  children: PropTypes.node
};

export default Work;

    