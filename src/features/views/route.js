// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { Home } from './';
import {Main} from '../layout';
export default {
  path: 'views',
  component: Main,
  childRoutes: [
    { path: '/', component: Home },
  ],
};
