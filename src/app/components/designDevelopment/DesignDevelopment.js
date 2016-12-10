import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';


const DesignDevelopment = (props) => {
  return (

    <Row className="show-grid design-development">
    <Col xs={6}> 

    <h3>
    Product
    </h3>
    <h4>
    Design & Development
    </h4>

    <p className="subhead">
    Our experienced team can help you design & build products from A-Z using Design Thinking Methodologies    </p>
    {props.children}

     <Link
        className="btn"
        to={'/DesignDevelopment'}>
        See How
    </Link>

    </Col>
    <Col xs={6}><img src={require('../../images/productGraphic.svg')} width="100%" className=""/></Col> 


    </Row>

    );
};

DesignDevelopment.propTypes = {
  children: PropTypes.node
};

export default DesignDevelopment;

	