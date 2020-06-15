import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CarGrid, CarTable } from '../common';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import AppsIcon from '@material-ui/icons/Apps';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useHandleViewChange } from './redux/hooks';

const ResultContainer = props => {
  const { viewDeck,handleViewChange } = useHandleViewChange();
  return (
    <React.Fragment>
      <ToggleButtonGroup
        value={viewDeck}
        exclusive
        onChange={(event, alignment)=>handleViewChange(alignment)}
        aria-label="text alignment"
      >
        <ToggleButton value="card" aria-label="left aligned">
          <AppsIcon />
        </ToggleButton>
        <ToggleButton value="table" aria-label="centered">
          <DehazeIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      {viewDeck==='card'?<CarGrid></CarGrid>:<CarTable></CarTable>}
      
    </React.Fragment>
  );
};

ResultContainer.propTypes = {};
ResultContainer.defaultProps = {};

export default ResultContainer;