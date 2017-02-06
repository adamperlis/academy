import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Link }       from 'react-router';
import ReactDOM from 'react-dom';
import {Hero}    from '../../components';
import {DesignThinking}    from '../../components';
import {DesignSprint}    from '../../components';
import {Work}    from '../../components';
import {DesignDevelopment}    from '../../components';
import {
  WizardMotion
}                     from '../../components';

class Home extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
          <Hero />
          <DesignThinking />
          <DesignSprint />
          <DesignDevelopment />
          <Work />
          <span className="gutter-l"></span>
          <span className="gutter-r"></span>
      </div>
    );
  }
}

Home.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired};

export default Home;