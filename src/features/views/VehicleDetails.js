import React from 'react';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import {
  Grid, makeStyles, Container, Box, Typography, Divider, Button, Chip,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {useHandleSearch} from '../common/redux/hooks';
import queryString from 'query-string';
import noimage from '../../images/noimage.jpeg';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CustomRouterLink from '../common/CustomRouterLink';
import GoogleMapReact from 'google-map-react';
import {Marker} from '../common';

import Config from '../../Config.json';

const AnyReactComponent = ({text}) => <div>{text}</div>;


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {

  },
  backgroundNoImage: {
    background: `url(${noimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 500,
    backgroundPosition: 'center',
    padding: theme.spacing(35, 0, 6),
  },
  googleMap: {
    width: 300,
    height: 300,
  },
}));
const VehicleDetails = (props) => {
  const classes = useStyles();
  const {searchList} = useHandleSearch();
  let vehicle = undefined;
  if (searchList.vehicles) {
    const parsed = queryString.parse(props.location.search);
    searchList.vehicles.forEach((v) => {
      if (v._id === parseInt(parsed.id)) {
        vehicle = v;
      }
    });
  }

  return (
    <React.Fragment>
      {vehicle && <Container maxWidth="lg" component="main">

        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={classes.backgroundNoImage}>

            <Button component={CustomRouterLink} to={`/`}>
              <ArrowBackIcon></ArrowBackIcon> Back to search
            </Button>
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
              <Grid container xs={12} spacing={2} style={{paddingLeft: 30}}>
                <Grid item xs={3}>
                  <Typography component="h3" variant="subtitle1" color="textPrimary">
                    <b>Make</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>{vehicle.make}</Grid>
                <Grid item xs={3}>
                  <Typography component="h3" variant="subtitle1" color="textPrimary">
                    <b>Year</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>{vehicle.year}</Grid>
                <Grid item xs={3}>
                  <Typography component="h3" variant="subtitle1" color="textPrimary">
                    <b>Date added</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>{vehicle.dateAdded}</Grid>
                <Grid item xs={3}>
                  <Typography component="h3" variant="subtitle1" color="textPrimary">
                    <b>License</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>{vehicle.licensed ? <Chip

                  label="Licensed"
                  clickable
                  color="primary"
                /> : <Chip

                  label="Deletable secondary"
                  onDelete={() => { }}
                  color="secondary"
                />}</Grid>
                <Grid item xs={3}>
                  <Typography component="h3" variant="subtitle1" color="textPrimary">
                    <b>Location</b>
                  </Typography>
                </Grid>
                <Grid item xs={9}>{`${vehicle.warehouse}, ${vehicle.location}`}</Grid>

                <Grid item xs={12} className={classes.googleMap}>
                  <GoogleMapReact
                    bootstrapURLKeys={{key: Config.google.key}}
                    defaultZoom={15}
                    defaultCenter={[vehicle.latitude, vehicle.longitude]}
                  >
                    <Marker
                      key={vehicle._id}
                      lat={vehicle.latitude}
                      lng={vehicle.longitude}
                      text={`${vehicle.warehouse}-${vehicle.location}`}
                    />
                  </GoogleMapReact>
                </Grid>
              </Grid>


              <p >Description</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Et dolor suscipit libero eos atque quia ipsa
      sint voluptatibus!
        Beatae sit assumenda asperiores iure at maxime atque
        repellendus maiores quia sapiente.</p>

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

      }

    </React.Fragment>
  );
};
VehicleDetails.propTypes = {};
VehicleDetails.defaultProps = {};
export default VehicleDetails;
