import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: '50%',
    left: '50%',
    width: '18px',
    height: '18px',
    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '100%',
    userSelect: 'none',
    transform: 'translate(-50%, -50%)',
    cursor: `${props => (props.onClick ? 'pointer' : 'default')}`,
    '&:hover': {
      zIndex: 1
    }
  }
}));
const Marker = props => {
  const classes=useStyles();
 return ( <div className={classes.root}
   
  />)
};

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
