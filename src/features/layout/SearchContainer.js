import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Container, Typography, withStyles, makeStyles, Paper } from '@material-ui/core';
import { SearchInput } from '../common';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));
export default function SearchContainer() {
  const classes=useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Paper className={classes.paper}>
          <SearchInput></SearchInput>
      </Paper>
  </Container>
  );
};

SearchContainer.propTypes = {};
SearchContainer.defaultProps = {};
