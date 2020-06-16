import React from 'react';

import {
  Grid, Card, CardContent, Typography, makeStyles, CardMedia, CardActionArea, CardHeader, Chip, Avatar, IconButton,
} from '@material-ui/core';


// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { connect } from 'react-redux';
import CustomRouterLink from './CustomRouterLink';
const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  squereChip: {
    borderRadius: 0,
  },
}));
const CarGrid = (props) => {
  const { searchList } = props;
  const classes = useStyles();
  return (

    <Grid container spacing={5} alignItems="flex-end">
      {searchList && searchList.vehicles && searchList.vehicles.map((car) => (
        // Enterprise card is full width at sm breakpoint
        <Grid item key={car.id} xs={12} sm={12} md={4}>
          <Card className={classes.root} variant="outlined">

            <CardActionArea component={CustomRouterLink} to={`/vehicle?id=${car._id}`}>
              <CardMedia
                className={classes.media}
                image="https://i2.wp.com/authenticautosales.com/wp-content/uploads/2020/03/nocarimage.jpg"
                title={car.model}>
                {car.licensed &&
                  <Chip
                    className={classes.squereChip}
                    label="Licensed"
                    color="secondary"
                  />
                }
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {car.model}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {car.make}
                </Typography>
                <Typography component="h4" variant="subtitle1" color="textPrimary">
                  Price ${car.price}
                </Typography>
                <Typography component="h4" variant="subtitle1" color="textPrimary">
                  Year: {car.year}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>

  );
};
const mapStateToProps = (state) => {
  return { searchList: state.common.searchList };
};
CarGrid.propTypes = {};
CarGrid.defaultProps = {};
export default connect(mapStateToProps)(CarGrid);

