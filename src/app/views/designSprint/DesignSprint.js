import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import {
  WizardMotion,
  ListCollapse,
  ListBenefits,
  ContactUs,
  ArrowDownIcon
}                     from '../../components';
import { Grid, Row, Col, Accordion, Panel, PanelGroup } from 'react-bootstrap';
import { Link }       from 'react-router';
import  Scroll   from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


class DesignSprint extends Component {
  
  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterDesignSprint } =  this.props;
    enterDesignSprint();
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
        <Row className="show-grid sprint-academy hero">
        <div className="vertical-wrapper">
            <div className="vertical-middle">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={1}> 
            <div className="block-reveal">
            <h1>Design</h1>
            <h1>Sprint</h1>
            <h2>Academy</h2>
            </div>
            <ScrollLink
              className="btn"
              activeClass="active" to="curriculum" spy={true} smooth={true} offset={-90} duration={850}>
              SEE THE CURRICULUM
            </ScrollLink>
          </Col>
          <Col xs={6} sm={9} mdOffset={1} md={8} lgOffset={2} lg={6} ></Col>
          </div>
          </div> 
        </Row>

        <Row className="show-grid arrow">
          <Col xs={12} md={12} xsHidden={true} smHidden={true}> 
            <ArrowDownIcon className="--white arrow-down-icon" />
          </Col>
        </Row> 

        <Row id="curriculum" className="show-grid sprint-academy what-is">
          <Col xs={6} sm={7} md={7} lg={7}></Col>
          <Col xs={6} sm={3} md={3} lg={3}>
            <h3>What is a</h3>
            <h4>Design Sprint?</h4>
            <p className="subhead">
            It’s a 6 step methodology for solving UX problems by building prototypes and testing them with real users.            </p>
          </Col> 
        </Row>

        <Row className="show-grid sprint-academy what-is">
          <Col xs={12} smOffset={1} sm={4} mdOffset={1} md={4} lgOffset={1} lg={4}>
            <ul>
              <li><img src={require('../../images/discovery.svg')} height="30px"/>
              <p>1. Discovery</p></li>
              <li><img src={require('../../images/sketch.svg')} height="30px"/>
              <p>2. Sketch/Wireframe</p></li>
              <li><img src={require('../../images/brush.svg')} height="30px"/>
              <p>3. Design</p></li>
              <li><img src={require('../../images/prototype.svg')} height="30px"/>
              <p>4. Prototype</p></li>
              <li><img src={require('../../images/user-testing.svg')} height="30px"/>
              <p>5. User Testing</p></li>
              <li><img src={require('../../images/learn.svg')} height="30px"/>
              <p>6. Learn & Repeat</p></li>
            </ul>
          </Col>

          <Col xs={12} smOffset={1} sm={4} mdOffset={1} md={4} lgOffset={1} lg={4} style={{padding:'0',}}> 
            <ListBenefits /> 
          </Col> 
        </Row>

        <Row className="show-grid ignite-talk">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={4} lgOffset={2}> 

          <h3>
          Ignite
          </h3>
          <h4>
          Talk
          </h4>

          <p className="subhead">
          In this talk you will hear from leading UX expert Adam Perlis. He will walk you through the in’s and out’s of Design Sprints and how to build products better, faster and cheaper products in just 5 days.           </p>

           <ContactUs label="Schedule a Talk" />

          </Col>
          <Col xs={6}></Col>
        </Row>


        <Row id="workshop" className="show-grid workshop">
          <Col xs={7} xsOffset={5} smOffset={0} smPush={7}  sm={4} mdOffset={1} mdPush={6} md={4} lgOffset={1} lg={4}> 

          <h3>
          2 Day
          </h3>
          <h4>
          Workshop
          </h4>

          <p className="subhead">
          In this workshop you will learn how to solve UX problems by designing, prototyping and testing products using Design Sprints. You will be part of a team that launches a prototype that is ready to test. Discover how sprints can foster team collaboration,  get you “buy in” from your key stakeholders and lead to more successful products.
          </p>

          <ContactUs label="Plan a Workshop" />

          </Col>
          <Col xs={12} sm={4} smPull={3} mdOffset={1} md={4} mdPull={5} lgOffset={1} lg={4} style={{padding:'0', zIndex: '4'}}><ListCollapse /></Col> 
        </Row>

        <Row className="show-grid bootcamp">
          <Col xs={7} sm={4} smOffset={1} md={5} mdOffset={1} lg={4} lgOffset={2}> 

          <h3>
          2 Week
          </h3>
          <h4>
          Bootcamp
          </h4>

          <p className="subhead">
          In this training exercise the Academy℠ team will work hand-in-hand with your design, development and management teams to run a Design Sprint from start to finish. The result of the Design Sprint will be a functional prototype that your team can test with real users to get valuable feedback prior to moving into development.
          </p>
           
          <ContactUs label="Setup Training" />

          </Col>
          <Col xs={6}></Col>
        </Row>
      </div>
    );
}
}

DesignSprint.propTypes = {
  currentView: PropTypes.string.isRequired,
  enterDesignSprint: PropTypes.func.isRequired,};

export default DesignSprint;
