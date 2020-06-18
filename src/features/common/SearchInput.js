import React from 'react';
// import PropTypes from 'prop-types';

import {makeStyles, AppBar, Toolbar, Grid, TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import {useHandleSearch} from './redux/handleSearch';

const useStyles=makeStyles((theme)=>({
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
}));

export default function SearchInput() {
  const classes=useStyles();
  const {handleSearch}=useHandleSearch();

  return (
    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder="Search by model, make"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput,
              }}
              onKeyDown={(event)=>{
                console.log(event.key);
                if (event.key==='Enter') {
                  handleSearch(event.target.value);
                }
              }}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
SearchInput.propTypes = {};
SearchInput.defaultProps = {};
