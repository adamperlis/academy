import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

class WhatIsDesignThinking extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout();
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
          What is  
        </h1>
        <h2>Design Thinking?</h2>
      </div>
    );
  }
}

WhatIsDesignThinking.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterAbout:   PropTypes.func.isRequired,
  leaveAbout:   PropTypes.func.isRequired
};

export default WhatIsDesignThinking;
