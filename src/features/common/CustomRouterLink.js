import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));
CustomRouterLink.propTypes = {};
CustomRouterLink.defaultProps = {};

export default CustomRouterLink;