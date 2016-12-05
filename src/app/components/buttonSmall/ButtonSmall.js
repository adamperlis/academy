import React, {PropTypes} from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link }       from 'react-router';

const ButtonSmall = (props) => {
  return (


			<Link
              className="btn btn-primary btn-sm"
              to={'/about'}>
              Read More
            </Link>
  );
};

ButtonSmall.propTypes = {
  children: PropTypes.node
};

export default ButtonSmall;

	