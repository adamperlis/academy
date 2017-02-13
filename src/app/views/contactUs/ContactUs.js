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

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <div className="block-reveal">
        <Row className="show-grid hero contact-us">
        <div className="vertical-wrapper">
            <div className="vertical-middle">
          <Col xs={6} sm={3} smOffset={1} md={3} mdOffset={1} lg={2} lgOffset={1}> 
            <h1>Contact</h1>
            <h2>Us</h2>

            <br></br>
            <p>You can reach us at <a className="link" href="mailto:hello@academy-ny.com?Subject=Hello" target="_blank">hello@academy-ny.com</a></p>
          </Col>
          <Col xs={6}></Col>
          </div>
          </div> 
        </Row>
        </div>
      </div>
    );
}
}

ContactUs.propTypes = {
  currentView: PropTypes.string.isRequired,
  enterContactUs: PropTypes.func.isRequired,
};

export default ContactUs;
