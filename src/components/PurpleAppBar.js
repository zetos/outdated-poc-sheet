import React, {PropTypes} from 'react';
import {AppBar} from 'react-toolbox/lib/app_bar';
import Logo from './Logo.js';
import theme from './PurpleAppBar.css';

const PurpleAppBar = ({children}) => (
  <AppBar theme={theme}>
    <Logo /> App Example
    {children}
  </AppBar>
);

PurpleAppBar.propTypes = {
  children: PropTypes.node,
};

export default PurpleAppBar;
