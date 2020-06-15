import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {} from './redux/hooks';
import TopBar from './TopBar';
import { SearchContainer, ResultContainer, Footer } from '.';

export default function Main() {
  return (
   <React.Fragment>
        <TopBar></TopBar>
        <SearchContainer></SearchContainer>
        <ResultContainer></ResultContainer>
        <Footer></Footer>
      </React.Fragment>
  );
};

Main.propTypes = {};
Main.defaultProps = {};
