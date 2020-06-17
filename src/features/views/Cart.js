import React from 'react';
// import PropTypes from 'prop-types';
import {useRemoveFromCart} from './redux/hooks';
import {Paper, Table, TableRow, TableHead, TableCell, TableBody, Button, makeStyles, Container, TableContainer, Grid, Typography, IconButton} from '@material-ui/core';

import {useSelector} from 'react-redux';
import Config from '../../Config.json';
import {CustomRouterLink} from '../common';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {DeleteOutline} from '@material-ui/icons';
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  paper: {

  },
}));
const ccyFormat = (num) => {
  return `${num.toFixed(2)}`;
};

export default function Cart() {
  const classes = useStyles();
  const {removeFromCart}=useRemoveFromCart();
  const lineItems = useSelector((state) => state.views.lineItems);
  const subtotalPrice = useSelector((state) => state.views.subtotalPrice);
  const totalTax = useSelector((state) => state.views.totalTax);
  const totalPrice = useSelector((state) => state.views.totalPrice);
  return (
    <div className={classes.root}>

      <Container maxWidth="md" component="main">
        <Button component={CustomRouterLink} to={`/`}>
          <ArrowBackIcon></ArrowBackIcon> Back to search
        </Button>
        <h1>Your Cart</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right"></TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItems.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <IconButton onClick={()=>removeFromCart(row._id)}>
                      <DeleteOutline></DeleteOutline>
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Grid container>
                      <Grid item xs={4}>
                        <img height="80"
                          src="https://i2.wp.com/authenticautosales.com/wp-content/uploads/2020/03/nocarimage.jpg"></img>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography gutterBottom variant="h6" component="h2">
                          {row.model}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {row.make}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{ccyFormat(row.quantity * row.price)}</TableCell>
                </TableRow>
              ))}
              <TableRow >
                <TableCell rowSpan={3} colSpan={2} />
                <TableCell colSpan={2}><b>Subtotal</b></TableCell>
                <TableCell align="right">{ccyFormat(subtotalPrice)}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell ><b>Tax</b></TableCell>
                <TableCell align="right">{`${(Config.frontend.tax * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(totalTax)}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell colSpan={2}><b>Total</b></TableCell>
                <TableCell align="right"><b>${ccyFormat(totalPrice)}</b></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

Cart.propTypes = {};
Cart.defaultProps = {};
