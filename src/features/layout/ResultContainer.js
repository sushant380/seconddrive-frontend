import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { CarGrid, CarTable } from '../common';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useHandleViewChange } from './redux/hooks';
import { Container } from '@material-ui/core';

const ResultContainer = props => {
  const { viewDeck,handleViewChange } = useHandleViewChange();
  
  return (
    <Container maxWidth="lg" component="main">
      <ToggleButtonGroup
        value={viewDeck}
        exclusive
        onChange={(event, alignment)=>handleViewChange(alignment)}
        aria-label="text alignment"
        style={{float:'right'}}
      >
        <ToggleButton value="card" aria-label="left aligned">
          <AppsIcon />
        </ToggleButton>
        <ToggleButton value="table" aria-label="centered">
          <DehazeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      {viewDeck==='card'?<CarGrid></CarGrid>:<CarTable></CarTable>}
      
    </Container>
  );
};

ResultContainer.propTypes = {};
ResultContainer.defaultProps = {};

export default ResultContainer;
