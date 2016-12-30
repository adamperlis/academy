import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';


const DesignDevelopment = (props) => {
  return (

    <Row className="show-grid design-development">
    <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={2}> 

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
        to={'/ProductDesign'}>
        See How
    </Link>

    </Col>
    <Col xs={6} sm={3} mdOffset={1} md={3} lgOffset={2} lg={3}>
    <img src="./public/assets/images/productGraphic.svg" width="100%" className=""/></Col> 


    </Row>

    );
};

DesignDevelopment.propTypes = {
  children: PropTypes.node
};

export default DesignDevelopment;

	