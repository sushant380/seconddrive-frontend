import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import {} from './redux/hooks';
import {TopBar, Footer } from '.';
import { useHandleSearch } from '../common/redux/hooks';

 const Main=props=> {
  const { children } = props;
  const {initialLoad,handleSearch}=useHandleSearch();
  useEffect(() => {
      if(initialLoad){
        handleSearch();
      }
  });
  return (
   <React.Fragment>
        <TopBar></TopBar>
          <main >
            {children}
          </main>
        <Footer></Footer>
      </React.Fragment>
  );
};

Main.propTypes = {};
Main.defaultProps = {};
export default Main;