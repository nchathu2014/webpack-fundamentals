/**
 * Created by UCHATNU on 7/1/2016.
 */
import {loginStatus} from "./components/login.js";
import {getMessage} from "./components/component";

var disPlayMessage = "<h1>Hello World from Webpack...!</h1>";
var consoleMessage = "I am a console message";

document.getElementById('app').innerHTML = disPlayMessage;
console.log(consoleMessage);


console.log("Login Status : "+loginStatus("admin","123"));
getMessage();