import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import {
  WizardMotion,
  ListCollapse,
  ListBenefits
}                     from '../../components';
import { Grid, Row, Col, Accordion, Panel, PanelGroup } from 'react-bootstrap';
import { Link }       from 'react-router';

class DesignSprint extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterDesignSprint } =  this.props;
    enterDesignSprint();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveDesignSprint } =  this.props;
    leaveDesignSprint();
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
          <Col xs={6}> 
            <h1>Design</h1>
            <h1>Sprint</h1>
            <h2>Academy</h2>
            <Link
              className="btn"
              to={'#'}>
              SEE THE CURRICULUM
            </Link>
          </Col>
          <Col xs={6}></Col> 
        </Row>

        <Row className="show-grid sprint-academy what-is">
          <Col xs={4}></Col>
          <Col xs={8}>
            <h3>What's a</h3>
            <h4>Design</h4>
            <h4>Sprint?</h4>
            <p className="subhead">
            It’s a 6 step methodology for solving UX problems by building prototypes and testing them with real users.            </p>
          </Col> 
        </Row>
        <Row className="show-grid sprint-academy what-is">
          <Col xs={12}>
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
        </Row>
        <Row className="show-grid sprint-academy what-is">
            <ListBenefits />
        </Row>
        <Row className="show-grid sprint-academy what-is">
            <ListCollapse />
        </Row>
      </div>
    );
}
}

DesignSprint.propTypes = {
  currentView: PropTypes.string.isRequired,
  enterDesignSprint: PropTypes.func.isRequired,
  leaveDesignSprint: PropTypes.func.isRequired
};

export default DesignSprint;
