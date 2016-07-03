/**
 * Created by UCHATNU on 7/3/2016.
 */

let img = document.createElement('img');
img.src=require("./img/capture.png");
document.getElementById('img-container').appendChild(img);

require('./css/bootstrap.min.css');
require('./scss/common.scss');
require('./less/main.less');
require('./css/custom.css');

function loadingApp(){

    let domElement = document.getElementById('app');
    let element = "<p class=\"navbar navbar-text navbar-right\">Signed in as <a href=\"#\" class=\"navbar-link\">Mark Otto</a></p>" +
        "<div class=\"panel panel-default\"> " +
                     "<div class=\"panel-heading\">Panel heading</div>" +
                                 "<table class=\"table\">" +"<thead>" +
                                    "<thead>"+
        "<tr>" +
        "<th>Col1</th>" +
        "<th>Col2</th>" +
        "<th>Col3</th>" +
        "</tr>"+
                                    "</thead>"+
                                    "<tr>" +
                                        "<td>Col1</td>" +
                                        "<td>Col2</td>" +
                                        "<td>Col3</td>" +
                                    "</tr>"+
                                    "<tr>" +
                                    "<td>Col1</td>" +
                                    "<td>Col2</td>" +
                                    "<td>Col3</td>" +
                                    "</tr>"+
                                 "</table>" +
                    "</div>";
    domElement.innerHTML = element;
}

loadingApp();