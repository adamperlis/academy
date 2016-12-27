import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

class InnovationServices extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterInnovationServices } = this.props;
    enterInnovationServices();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveInnovationServices } = this.props;
    leaveInnovationServices();
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
          Innovation  
        </h1>
        <h2>Services</h2>
      </div>
    );
  }
}

InnovationServices.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterInnovationServices:   PropTypes.func.isRequired,
  leaveInnovationServices:   PropTypes.func.isRequired
};

export default InnovationServices;
