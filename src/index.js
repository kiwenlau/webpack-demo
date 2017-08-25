/*global document*/

import _ from 'lodash';
import fundebug from 'fundebug-javascript';
fundebug.apikey = "3cf3b58896cde530559232dac62ede3898cd015f6d8ac0f3eb8f792346c27983";

import printMe from './print.js';

function component()
{
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());