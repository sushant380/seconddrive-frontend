// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {Home, VehicleDetails, Cart} from './';
import {Main} from '../layout';
export default {
  path: '/',
  component: Main,
  childRoutes: [
    {path: 'home', component: Home, isIndex: true},
    {path: '/vehicle', component: VehicleDetails},
    {path: '/cart', component: Cart},
  ],
};
