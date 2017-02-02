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
}                     from '../../../components';
import  Scroll   from 'react-scroll';

var ScrollLink       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class Time extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterTime } = this.props;
    enterTime();
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
        <Row className="show-grid time hero">
        <div className="vertical-wrapper">
            <div className="vertical-middle">
          <Col xs={8} sm={4} smOffset={1} md={5} mdOffset={1} lg={5} lgOffset={1}> 
            
            <div className="block-reveal">
            <h1>Case Study</h1>
            <h2>Time, Inc</h2>
            </div>

            <Link
              className="back-btn btn"
              to={'/Work'}>
              <span><img src={require('../../../images/arrow-thin-left.svg')}/>
              BACK</span>
            </Link>
          
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

        <Row id="services" className="show-grid">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={4} lgOffset={2}> 

              Hello
            
          </Col>
          </Row>
      </div>
    );
  }
}

Time.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterTime:   PropTypes.func.isRequired
};

export default Time;
