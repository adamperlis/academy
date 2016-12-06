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
      </div>
    );
  }
}

export default PageNotFound;
