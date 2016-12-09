import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

class ProductDesign extends Component {

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
          Product  
        </h1>
        <h2>Design & Development</h2>
      </div>
    );
  }
}

ProductDesign.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterProductDesing:   PropTypes.func.isRequired,
  leaveProductDesing:   PropTypes.func.isRequired
};

export default ProductDesign;
