/*global document*/

import _ from 'lodash';
import fundebug from 'fundebug-javascript';
fundebug.apikey = "3cf3b58896cde530559232dac62ede3898cd015f6d8ac0f3eb8f792346c27983";

function component()
{
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());