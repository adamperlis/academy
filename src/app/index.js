import React                from 'react';
import MuiThemeProvider 	from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactDOM             from 'react-dom';
import { Routes }           from './routes/Route';

import 'babel-polyfill';
import 'animate.css';
import 'jquery';
import 'whatwg-fetch';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.style.scss';



const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

const App = () => (
  <MuiThemeProvider>
  	<Routes />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, BootstrapedElement);

