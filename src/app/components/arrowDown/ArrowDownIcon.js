import React, {PropTypes} from 'react';

var ArrowDownIcon = React.createClass({
  render () {
  return (
    <img style={this.props.style} width="14px" height="16px" className={this.props.className} src="/public/assets/images/arrow-down-icon.svg"/>
  	);
	}
});


ArrowDownIcon.propTypes = {
  style : React.PropTypes.object,
  className: React.PropTypes.object
};

export default ArrowDownIcon;
