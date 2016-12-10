import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';


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

     <Link
        className="btn"
        to={'/DesignSprint'}>
        See Options
        </Link>

    </Col>
    <Col xs={6}></Col> 
        <Grid>
        <Row className="show-grid">
            <Col xs={12}> 
            <div>
                <img src={require('../../images/sprinter.png')} width="100%" className="img-responsive"/>
            </div>
            </Col> 
        </Row>
        </Grid>
    </Row>

    );
};

DesignSprint.propTypes = {
  children: PropTypes.node
};

export default DesignSprint;

	