import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import {
  WizardMotion
}                     from '../../components';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link }       from 'react-router';

class ContactUs extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterContactUs } =  this.props;
    enterContactUs();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveContactUs } =  this.props;
    leaveContactUs();
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Row className="show-grid hero">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={1}> 
            <h1>Contact</h1>
            <h2>Us</h2>

            You can reach us at <a className="link" href="mailto:hello@academybydesign.com?Subject=Hello" target="_blank">hello@academybydesign.com</a>
          </Col>
          <Col xs={6}></Col> 
        </Row>
      </div>
    );
}
}

ContactUs.propTypes = {
  currentView: PropTypes.string.isRequired,
  enterContactUs: PropTypes.func.isRequired,
  leaveContactUs: PropTypes.func.isRequired
};

export default ContactUs;
