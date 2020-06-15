import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, CardHeader, withStyles, makeStyles, CardMedia, CardActionArea } from '@material-ui/core';
import {StarSharp as StarIcon} from '@material-ui/icons'
import { useHandleSearch } from './redux/handleSearch';
// import PropTypes from 'prop-types';
import {} from './redux/hooks';
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
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
}));

const CarGrid=props =>{
  const {searchList}=props;
  const classes=useStyles();
  return (
    <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {searchList && searchList.vehicles &&  searchList.vehicles.map((car) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={car.id} xs={12} sm={12} md={4}>
               <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i2.wp.com/authenticautosales.com/wp-content/uploads/2020/03/nocarimage.jpg"
          title={car.model}
        />
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
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
};
const mapStateToProps=state=>{
  return {searchList:state.common.searchList};
}
CarGrid.propTypes = {};
CarGrid.defaultProps = {};
export default connect(mapStateToProps)(CarGrid);

