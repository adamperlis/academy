import React, {PropTypes} from 'react';
import cx from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import DesignThinkingGraphic from './DesignThinkingGraphic';

const DesignThinking = (props) => {
  return (

    <Row className="show-grid design-thinking">
    <Col xs={5}><DesignThinkingGraphic /></Col> 
    <Col xs={7}> 

    <h3>
    What is
    </h3>
    <h4>
    Design Thinking?
    </h4>

    <p className="subhead">
    We bring UX & Design Thinking into organizations, teaching and empowering people to implement them into their products & services.
    </p>
    {props.children}

    <Link
        className="btn"
        to={'#'}>
        See Video
    </Link>

    </Col>
    </Row>

    );
};

DesignThinking.propTypes = {
  children: PropTypes.node
};

export default DesignThinking;

	