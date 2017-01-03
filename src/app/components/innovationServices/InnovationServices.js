import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';


const InnovationServices = (props) => {
  return (

    <Row className="show-grid innovation-services">
    <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={2}> 

    <h3>
    Innovation
    </h3>
    <h4>
    Services
    </h4>

    <p className="subhead">
 We will embed a team of people at your company and work with your management team to rapidly prototype and build products.
    </p>    
 {props.children}

     <Link
        className="btn"
        to={'/InnovationServices'}>
        See How
    </Link>

    </Col>
    <Col xs={6} sm={3} mdOffset={1} md={3} lgOffset={2} lg={3}>
    <img src="./public/assets/images/productGraphic.svg" width="100%" className=""/>
    </Col> 


    </Row>

    );
};

InnovationServices.propTypes = {
  children: PropTypes.node
};

export default InnovationServices;

    