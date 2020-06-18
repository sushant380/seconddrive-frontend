import React, {useEffect} from 'react';
import PropTypes, { object } from 'prop-types';
import {} from './redux/hooks';
import {TopBar, Footer} from '.';
import {useHandleSearch} from '../common/redux/hooks';

const Main=(props)=> {
  const {children} = props;
  const {initialLoad, handleSearch}=useHandleSearch();
  useEffect(() => {
    if (initialLoad) {
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

Main.propTypes = {
  children: PropTypes.arrayOf(object).isRequired,
};
Main.defaultProps = {
  children: [],
};
export default Main;
