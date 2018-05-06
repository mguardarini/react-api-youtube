import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import AppBar from './components/app_bar'; 
import Footer from './components/footer'; 
import Body from './components/body'; 


ReactDOM.render(<AppBar />,document.querySelector('.header'));
ReactDOM.render(<Body />,document.querySelector('.container'));
ReactDOM.render(<Footer />,document.querySelector('.footer'));