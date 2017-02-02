import React, {
  Component
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {MainContainer}    from '../../components';

class PageNotFound extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return(
      <div>
      Page Not Found! 404
      </div>
    );
  }
}

export default PageNotFound;
