import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {} from './redux/hooks';
import { Container, Grid, Typography, Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Copyright } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const Footer=props=> {
  const { className,footers, ...rest } = props;

  const classes = useStyles();
  return (<Container maxWidth="md" component="footer" className={classes.footer}>
  <Grid container spacing={4} justify="space-evenly">
    {footers && footers.map((footer) => (
      <Grid item xs={6} sm={3} key={footer.title}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {footer.title}
        </Typography>
        <ul>
          {footer && footer.description.map((item) => (
            <li key={item}>
              <Link href="#" variant="subtitle1" color="textSecondary">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
    ))}
  </Grid>
  <Box mt={5}>
    <Copyright />
  </Box>
</Container>);
};

Footer.propTypes = {
  className: PropTypes.string
};
Footer.defaultProps = {};

export default Footer;