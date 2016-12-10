import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import {
  WizardMotion
}                     from '../../components';

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
    const { DesignSprintComponents } =  this.props;
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
        <h1>
          Design Sprint  
        </h1>
        <h2>Academy</h2>
      </div>
    );
  }
}

DesignSprint.propTypes = {
  currentView: PropTypes.string.isRequired,
  enterComponents: PropTypes.func.isRequired,
  leaveComponents: PropTypes.func.isRequired
};

export default DesignSprint;
