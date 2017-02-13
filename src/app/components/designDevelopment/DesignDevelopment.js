import React, {PropTypes, Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';   
import { Link }       from 'react-router';
import { connect }  from 'react-redux';

const DesignDevelopment = (props) => {   
    return (

    <Row className="show-grid design-development">
    <div className="vertical-wrapper">
        <div className="vertical-middle">
            <Col xs={4} sm={7} md={7} lgOffset={2} lg={6}>
                <img src="/public/assets/images/InnovationServicesGraphic.svg" width="100%" className=""/> 
            </Col> 
            <Col xs={8} sm={3} md={3} lg={2}> 

            <h3>
            Product
            </h3>
            <h4>
            Design & Development
            </h4>

            <p className="subhead">
            Our experienced team can help you design & build products from A-Z using Design Thinking Methodologies    </p>
           

                <Link
                    className="btn"
                    to={'/ProductDesign'}>
                    Work With Us
                </Link>

            </Col>
        </div>
    </div>
    </Row>
    );
};


DesignDevelopment.propTypes = {
  children: PropTypes.node
};

export default DesignDevelopment;
	