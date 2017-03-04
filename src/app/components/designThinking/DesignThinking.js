import React, {PropTypes} from 'react';
import cx from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import DesignThinkingGraphic from './DesignThinkingGraphic';

const DesignThinking = (props) => {
  return (
    <Row className="show-grid design-thinking">
    <Col className="wrapper" xs={12} sm={12} md={11} lg={11}>
    <div className="vertical-wrapper">
        <div className="vertical-middle">
            <Col xs={5} sm={7} md={7} lg={8}><DesignThinkingGraphic /></Col> 
            <Col xs={7} sm={3} md={3} lg={3}> 

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
        </div>
    </div>
    </Col>
    </Row>

    );
};

DesignThinking.propTypes = {
  children: PropTypes.node
};

export default DesignThinking;

	