import React, {PropTypes} from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  container: {
    position: 'absolute',
    display: 'inline-block',
    content:'',
    margin: '-50px 0 0 -50px',
    left: '50%',
    top: '50%',
    zIndex:'5',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
    zIndex:'5',
  },
};

const LoadingIcon = (props) => {
  return (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      loadingColor="#6d65cb"
      color="#6d65cb"
      status="loading"
      style={style.refresh}
    />a
  </div>
    );
};

LoadingIcon.propTypes = {
  children: PropTypes.node
};

export default LoadingIcon;
