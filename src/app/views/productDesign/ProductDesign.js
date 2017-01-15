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
import  Scroll   from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class ProductDesign extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterProductDesign } = this.props;
    enterProductDesign();
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
          Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
          <Col xs={8} sm={4} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <div className="block-reveal">
            <h1>Product</h1>
            <h2>Design & Development</h2>
            </div>
            
            <ScrollLink
              className="btn"
              activeClass="active" to="services" spy={true} smooth={true} offset={-90} duration={850}>
              SEE OUR SERVICES
            </ScrollLink>
          </Col>
          <Col xs={6} sm={9} mdOffset={1} md={8} lgOffset={2} lg={6}></Col> 
        </Row>

        <Row id="services" className="show-grid product-des">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={4} lgOffset={2}> 

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
          <Col xs={5} xsOffset={1} sm={4} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={2}>
            <img src={require('../../images/sketch.svg')} height="150px" style={{marginTop:'50px', opacity:'.5'}}/>
          </Col>
        </Row>

        <Row className="show-grid product-dev">
          <Col xs={5} sm={5} smOffset={1} md={6} mdOffset={1} lg={4} lgOffset={2}>
            <img src={require('../../images/code.svg')} height="150px" style={{marginTop:'50px', opacity:'.5'}}/>
          </Col> 
          <Col xs={7} sm={5} md={4} lg={4}> 

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

        <Row className="show-grid bootcamp">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={4} lgOffset={2}> 

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
          <Col xs={5} xsOffset={1} sm={4} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={2}>
            <img src={require('../../images/project-management.svg')} height="150px" style={{marginTop:'50px', marginLeft:'-25px', opacity:'.5'}}/>
          </Col>
        </Row>
      </div>
    );
  }
}

ProductDesign.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterProductDesign:   PropTypes.func.isRequired
};

export default ProductDesign;
