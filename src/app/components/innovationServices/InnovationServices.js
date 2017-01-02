import React, {PropTypes, Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';   
import { Link }       from 'react-router';
import { connect }  from 'react-redux';
import { TopBarNav }    from '../../components';

const InnovationServices = (props) => {   

    let TopBarNav = null;

    function handleClick() {
        // TopBarNav.handleRouteNav.bind(this, 3);
    }

    return (

    
    <div>
    <Row className="show-grid innovation-services">
    <Col xs={4} sm={7} md={7} lg={8}>
       {/* <div className="square-two"></div>
         <div className="square-one"></div>
     
        <div className="triangle"></div>*/}
        <img src={require('../../images/InnovationServicesGraphic.svg')} width="100%" className=""/> 
    </Col> 
    <Col xs={8} sm={3} md={3} lg={2}> 

    <h3>
    Innovation
    </h3>
    <h4>
    Services
    </h4>

    <p className="subhead">
    We will embed a team of people at your company and work with your management team to rapidly prototype and build products.    </p>
   

        <Link
        ref={(TopBarNav) => { this.TopBarNav = TopBarNav; }}
        onTouchTap={handleClick()}
        className="btn"
        to={'/InnovationServices'}>
        Work With Us
        </Link>

    </Col>
    </Row>
    </div>
    );
};


InnovationServices.propTypes = {
  children: PropTypes.node
};

export default InnovationServices;
	