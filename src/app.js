/**
 * Created by UCHATNU on 7/1/2016.
 */

require('./components/component');
var loginStatus = require('./components/login.es6');

var disPlayMessage = "<h1>Hello World from Webpack....!</h1>";
var consoleMessage = console.log("I am a console message");

document.getElementById('app').innerHTML = disPlayMessage;
consoleMessage;


console.log("Login Status : "+loginStatus.login);