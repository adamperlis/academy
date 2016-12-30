import React, {PropTypes} from 'react';
import cx from 'classnames';
import UpIcon from './UpIcon';

const defaultBackGroundColor = '#4A4A4A';
const sideOffset    = '40px';
const bottomOffset  = '40px';
const defaultWidth  = '40px';
const defaultZindex = 10;
const defaultOpacity= 1;
const defaultStyle = {
  position: 'fixed',
  right:    sideOffset,
  left:     '',
  bottom:   bottomOffset,
  borderRadius: '100px',
  width:    defaultWidth,
  zIndex:   defaultZindex,
  opacity:  defaultOpacity,
  backgroundColor: defaultBackGroundColor,
  height: '40px',
};

const BackToTopButton = ({onClick, position, children, motionStyle}) => {
  const buttonStyle = setPosition(position, {...motionStyle, ...defaultStyle});

  return (
      <button
        style={buttonStyle}
        className={cx({
          'btn': true
        })}
        onClick={onClick}>
        {
          !children &&
          <div style={{marginRight: '0px'}}>
            <UpIcon color={'#F1F1F1'}/>
          </div>
        }
        {
          !!children &&
          children
        }
      </button>
  );
};

BackToTopButton.propTypes = {
  position: PropTypes.oneOf(['bottom-left', 'bottom-right']),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  motionStyle: PropTypes.object
};

BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

function setPosition(position = 'bottom-right', refStyle = defaultStyle) {
  const style = {...refStyle};

  switch (position) {
  case 'bottom-right':
    style.right = sideOffset;
    style.left = '';
    return style;

  case 'bottom-left':
    style.right = '';
    style.left = sideOffset;
    return style;

  default:
    return refStyle;
  }
}

export default BackToTopButton;
