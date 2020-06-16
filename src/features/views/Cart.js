import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { Paper, Table, TableRow, TableHead, TableCell, TableBody, TextField, IconButton, Button, makeStyles, Container, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useAddToCart } from './redux/addToCart';
import { useSelector } from 'react-redux';
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  paper: {

  },
}));
export default function Cart() {
  const classes = useStyles();
  const lineItems  = useSelector((state) =>state.views.lineItems);
  const subtotalPrice=useSelector((state) =>state.views.subtotalPrice);
  const totalTax=useSelector((state) =>state.views.totalTax);
  const totalPrice=useSelector((state) =>state.views.totalPrice);
  return (

    <div className={classes.root}>
      <Container maxWidth="md" component="main">
        <h1>Your Cart</h1>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Details</TableCell>
                <TableCell >Location</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Pieces</TableCell>
                <TableCell >Total Price</TableCell>
                <TableCell ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItems.map((node) => (
                <TableRow key={node._id}>
                  <TableCell component="th" scope="row">
                    <Typography variant="h5" component="h2">
                      {node.model}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {node.make}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6" component="h6">
                      {node.warehouse}
                    </Typography>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography variant="h6" component="h6">
                      {node.price}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      variant="outlined"
                      className={classes.quantityInput}
                      defaultValue={node.quantity}
                      type="number"
                      margin="normal"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Typography gutterBottom variant="h6" component="h6">
                      {node.price*node.quantity}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <div className={classes.checkout}>
          <p>
            Subtotal: ${subtotalPrice} <br />
          Taxes: ${totalTax} <br />
          Total: ${totalPrice}
          </p>
          <Button variant="contained" color="primary" >
            Checkout
        </Button>
        </div>
      </Container>
    </div>
  );
};

Cart.propTypes = {};
Cart.defaultProps = {};
