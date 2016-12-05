import React, {PropTypes} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const MainContainer = (props) => {
  return (
    <div className="main-container">
      
	    <Grid>
	    	<Row className="show-grid">
	      		<Col xs={12}></Col>
	    	</Row>
	    </Grid>
      {props.children}

    </div>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node
};

export default MainContainer;


