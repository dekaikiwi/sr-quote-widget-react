/** @jsx React.DOM */
'use strict'
var React = require('react')
var ReactDOM = require('react-dom')
var Hello = require('./commentview')
//var srentry = require('./srentry');
var content = document.getElementsByClassName('commentWidget')



for (var i = 0; i < content.length; i++) {
  var customer = content[i].getAttribute("customer"),
      board    = content[i].getAttribute("board"),
      interval = content[i].getAttribute("interval")
  ReactDOM.render(<Hello customer={customer} board={board} interval={interval} />, content[i])
}
