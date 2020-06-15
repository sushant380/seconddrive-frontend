import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { Grid, Paper, makeStyles, Container, Box, Typography, Divider, Button, Chip } from '@material-ui/core';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DoneIcon from '@material-ui/icons/Done';
import { useHandleSearch } from '../common/redux/hooks';
import queryString from 'query-string';
import noimage from '../../images/noimage.jpeg';
const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
  },
  paper: {

  },
  backgroundNoImage:{
    background:`url(${noimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 500,
    backgroundPosition: 'center',
    padding: theme.spacing(35, 0, 6),
  }
}));
const VehicleDetails = props => {
  const classes = useStyles();
  const { searchList } = useHandleSearch();
  let vehicle = {};
  if (searchList.vehicles) {
    const parsed = queryString.parse(props.location.search);
    searchList.vehicles.forEach((v) => {
      if (v._id === parseInt(parsed.id)) {
        vehicle = v;
      }
    })
  }
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} className={classes.backgroundNoImage}>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="div" p={4}>
            <Box mb={3}>
              <Typography variant="h4" component="h2">{vehicle.model}</Typography>
              <Divider />
            </Box>
            <Typography component="h4" variant="h3" gutterBottom>
              ${vehicle.price}
            </Typography>
            <Grid container xs={12} spacing={2} style={{ paddingLeft: 30 }}>
              <Grid item xs={3}><Typography component="h3" variant="subtitle1" color="textPrimary"><b>Make</b></Typography></Grid>
              <Grid item xs={9}>{vehicle.make}</Grid>
              <Grid item xs={3}><Typography component="h3" variant="subtitle1" color="textPrimary"><b>Year</b></Typography></Grid>
              <Grid item xs={9}>{vehicle.year}</Grid>
              <Grid item xs={3}><Typography component="h3" variant="subtitle1" color="textPrimary"><b>Date added</b></Typography></Grid>
              <Grid item xs={9}>{vehicle.dateAdded}</Grid>
              <Grid item xs={3}><Typography component="h3" variant="subtitle1" color="textPrimary"><b>License</b></Typography></Grid>
              <Grid item xs={9}>{vehicle.licensed ? <Chip

                label="Licensed"
                clickable
                color="primary"
              /> : <Chip

                  label="Deletable secondary"
                  onDelete={() => { }}
                  color="secondary"
                />}</Grid>
            </Grid>


            <p >Description</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa
            sint voluptatibus!
              Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>

            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<ShoppingCartIcon />}
            >Add to cart</Button>

          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};
VehicleDetails.propTypes = {};
VehicleDetails.defaultProps = {};
export default VehicleDetails
