import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {ButtonSmall}    from '../../components';

const InnovationServices = (props) => {
  return (

    <Row className="show-grid innovation-services">
    <Col xs={4}></Col> 
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

    <ButtonSmall />

    </Col>
    </Row>

    );
};

InnovationServices.propTypes = {
  children: PropTypes.node
};

export default InnovationServices;

	