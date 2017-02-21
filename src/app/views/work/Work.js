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
  ContactUs,
  ArrowDownIcon
}                     from '../../components';
import  Scroll   from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Work extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterWork } = this.props;
    enterWork();
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
        <Row className="show-grid work hero">
        <div className="vertical-wrapper">
            <div className="vertical-middle">
          <Col xs={8} sm={4} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            <div className="block-reveal">
            <h1>Our</h1>
            <h2>Work</h2>
            </div>
            
            <ScrollLink
              className="btn"
              activeClass="active" to="services" spy={true} smooth={true} offset={-90} duration={850}>
              SEE THE WORK
            </ScrollLink>
          </Col>
          <Col xs={6} sm={9} mdOffset={1} md={8} lgOffset={2} lg={6}></Col> 
          </div>
          </div>
        </Row>

        <Row className="show-grid arrow">
          <Col xs={12} md={12} xsHidden={true} smHidden={true}> 
            <ArrowDownIcon className="--white arrow-down-icon" />
          </Col>
        </Row> 
        <Row className="work show-grid">
        <Col xs={0} sm={0} md={1} lg={1}></Col>
        <Col xs={12} sm={12} md={11} lg={11}> 
            <div id="services" style={{paddingTop:'100px',}} className="secondary-title"><div className="small-line"></div><h5>Case Studies</h5></div>
        </Col>
        </Row>

        <Row className="work show-grid"> 
          <Col xs={6} sm={6} md={5} mdOffset={1} lg={5} lgOffset={1}> 
                        
            <div className="project">
            <Link
                to={'/Time'}>
                
                <img src="/public/assets/images/time-thumbnail@2x.jpg"/>
                <div className="project-title">Time, Inc</div>
                <div className="project-description">UX, UI, Design Thinking</div>
            </Link>
            </div>
          </Col>

          {/*<Col xs={6} sm={6} md={5} lg={5}>

            <div className="project">
            <Link
                to={'/Work/Time'}>
                
                <img src="/public/assets/images/time-thumbnail@2x.jpg"/>
                <div className="project-title">Time, Inc</div>
                <div className="project-description">UX, UI, Design Thinking</div>
            </Link>
            </div>
          </Col>*/}
          </Row>
      </div>
    );
  }
}

Work.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterWork:   PropTypes.func.isRequired
};

export default Work;
