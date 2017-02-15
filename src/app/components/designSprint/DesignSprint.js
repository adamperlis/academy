import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import Parallax from 'react-simple-parallax';


const DesignSprint = (props) => {
  return (
    <Row className="show-grid design-sprint">
    <Col className="wrapper" xs={12} sm={12} mdOffset={1} md={11} lgOffset={1} lg={11}> 
        <div className="vertical-wrapper">
            <div className="vertical-middle">
            <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={2}> 

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

             <Link
                className="btn"
                to={'/DesignSprint'}>
                See Options
            </Link>

            </Col>
        </div>
        </div>
    </Col> 
    </Row>
    );
};

DesignSprint.propTypes = {
  children: PropTypes.node
};

export default DesignSprint;

	