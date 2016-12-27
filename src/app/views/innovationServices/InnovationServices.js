import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';

class InnovationServices extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterInnovationServices } = this.props;
    enterInnovationServices();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveInnovationServices } = this.props;
    leaveInnovationServices();
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Row className="show-grid innovation hero">
          <Col xs={8}> 
            <h1>Innovation</h1>
            <h2>Services</h2>
            
            <Link
              className="btn"
              to={'#'}>
              SEE OUR SERVICES
            </Link>
          </Col>
          <Col xs={4}></Col> 
        </Row>

        <Row className="show-grid ignite-talk">
          <Col xs={7}> 

          <h3>
          Build
          </h3>
          <h4>
          Prototypes
          </h4>

          <p className="subhead">
          We embed with your team to rapidly develop prototypes and work with your teams to innovate and break down silos of knowledge to create a fully-transparent partnership.
          </p> 
          <Link
              className="btn"
              to={'#'}>
              Build With Us
          </Link>

          </Col>
          <Col xs={5}></Col>
        </Row>

        <Row className="show-grid arrow">
          <Col xs={12}> 
            <img src={require('../../images/big-arrow-down.svg')} width="100%" className=""/> 
          </Col>
        </Row>

        <Row className="show-grid workshop">
          <Col xs={5}></Col> 
          <Col xs={7}> 

          <h3>
          User
          </h3>
          <h4>
          Testing
          </h4>

          <p className="subhead">
          We spend time with your users, quickly testing hypotheses. Every decision we make to be validated with both qualitative and quantative data by running usability tests and programmed metrics.           
          </p>
          <Link
              className="btn"
              to={'#'}>
              Test with Us          
              </Link>

          </Col>
        </Row>

        <Row className="show-grid arrow-reverse">
          <Col xs={12}> 
            <img src={require('../../images/big-arrow-down-reverse.svg')} width="100%" className=""/> 
          </Col>
        </Row>

        <Row className="show-grid bootcamp">
          <Col xs={6}> 

          <h3>
          Launch
          </h3>
          <h4>
          Products
          </h4>

          <p className="subhead">
          Agile development means that we are constanlty building and testing. Your product isn’t done once it launches, our team will ensure that critical bugs are managed, metrics are being monitored and if something isn’t working for users then we are going to fix it.
          </p>
           <Link
              className="btn"
              to={'#'}>
              Launch with Us
          </Link>

          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
    );
  }
}

InnovationServices.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterInnovationServices:   PropTypes.func.isRequired,
  leaveInnovationServices:   PropTypes.func.isRequired
};

export default InnovationServices;
