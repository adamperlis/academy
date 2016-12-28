import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';
import {
  WizardMotion,
  ContactUs
}                     from '../../components';

class ProductDesign extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterProductDesign } = this.props;
    enterProductDesign();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveProductDesign } = this.props;
    leaveProductDesign();
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Row className="show-grid product-design hero">
          <Col xs={8}> 
            <h1>Product</h1>
            <h2>Design & Development</h2>
            
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
          Product
          </h3>
          <h4>
          Design & UX
          </h4>

          <p className="subhead">
          Our approach to product design is simple, the user comes first. Our award winning team will take you from concept, to prototype to execution using design thinking, and design sprints to build you the products of your dreams.
          </p> 
          <ContactUs label="Design with Us" />

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
          Product
          </h3>
          <h4>
          Development
          </h4>

          <p className="subhead">
          Agile development means we are constantly building, testing and evolving your product. Our team of experienced devlopers will work with you to build quality, maintainable and future proof products that fit your business needs.
          </p>
          <ContactUs label="Develop with Us" />
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
          Product
          </h3>
          <h4>
          Management
          </h4>

          <p className="subhead">
          Our team capitans, will help steer your products in the right direction. Managing timelines, communicating between designers and developers, overseeing usability tests and communicating with you all the way through. Rest assured that this group will get your product off the ground safely.          
          </p>
           <ContactUs label="Manage with Us" />

          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
    );
  }
}

ProductDesign.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterProductDesign:   PropTypes.func.isRequired,
  leaveProductDesign:   PropTypes.func.isRequired
};

export default ProductDesign;
