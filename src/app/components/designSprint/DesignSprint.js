import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {ButtonSmall}    from '../../components';
var imgSrc = '/images/sprinter.png';

const DesignSprint = (props) => {
  return (

    <Row className="show-grid design-sprint">
    <Col xs={6}> 

    <h3>
    Design Sprint
    </h3>
    <h4>
    Academy
    </h4>

    <p className="subhead">
    Train your team on how to implement Design Sprints into your product development process.
    </p>
    {props.children}

    <ButtonSmall />

    </Col>
    <Col xs={6}></Col> 

    <div>
        <img src={imgSrc} width="100%" className="img-responsive"/>
    </div>
    </Row>

    );
};

DesignSprint.propTypes = {
  children: PropTypes.node
};

export default DesignSprint;

	