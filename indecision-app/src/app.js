import { square, add } from './utils.js'
import { isAdult, canDrink } from './person.js'
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

console.log(square(4));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
