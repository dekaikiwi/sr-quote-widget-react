/** @jsx React.DOM */
'use strict'
//var React = require('react')
var ReactDOM = require('react-dom')
var fonts = require('google-fonts')

var QuoteView = require('./scripts/commentview')

require('./stylesheets/main.scss')

fonts.add({
  'Raleway' : [400, 700]
})

console.log(CommentView);

var content = document.getElementsByClassName('commentWidget')

for (var i = 0; i < content.length; i++) {
  var customer = content[i].getAttribute("customer"),
      board    = content[i].getAttribute("board"),
      interval = content[i].getAttribute("interval")
      ReactDOM.render(<QuoteView customer={customer} board={board} interval={interval}/>, content[i])
}
