import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';


const InnovationServices = (props) => {
  return (

    <Row className="show-grid innovation-services">
    <Col xs={4}>
        <div className="triangle"></div>
        <div className="square-one"></div>
        <div className="square-two"></div>
        <img src={require('../../images/InnovationServicesGraphic.svg')} width="100%" className=""/>
    </Col> 
    <Col xs={8}> 

    <h3>
    Innovation
    </h3>
    <h4>
    Services
    </h4>

    <p className="subhead">
    We will embed a team of people at your company and work with your management team to rapidly prototype and build products.    </p>
    {props.children}

        <Link
        className="btn"
        to={'/InnovationServices'}>
        Work With Us
        </Link>

    </Col>
    </Row>

    );
};

InnovationServices.propTypes = {
  children: PropTypes.node
};

export default InnovationServices;

	