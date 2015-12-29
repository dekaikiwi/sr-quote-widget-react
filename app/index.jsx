/** @jsx React.DOM */
'use strict'
//var React = require('react')
var ReactDOM = require('react-dom')
var fonts = require('google-fonts')

require('./stylesheets/main.scss')

var QuoteView = require('./scripts/QuoteView')

fonts.add({
  'Raleway' : [400, 700]
})

//Constants
var CONST_PROP_REQUIRED = 'PROPERTY_REQUIRED'

var getConfig = function(contentHTML) {
  var properties = {
                    'customer'        : CONST_PROP_REQUIRED,
                    'board'           : CONST_PROP_REQUIRED,
                    'interval'        : '5000',
                    'transitionTime'  : '300',
                    'sort'            : 'created_desc',
                   }
  for (var key in properties) {
    if (contentHTML.hasAttribute(key)) {
      properties[key] = contentHTML.getAttribute(key)
    } else if (!contentHTML.hasAttribute(key) && properties[key] === CONST_PROP_REQUIRED){
      throw new Error(key + " is a required property")
    }
  }

  return properties;

}

var content = document.getElementsByClassName('quoteWidget')

for (var i = 0; i < content.length; i++) {
  //console.log(content[i]);
  var config = getConfig(content[i])

  ReactDOM.render(<QuoteView  customer       = {config.customer}
                              board          = {config.board}
                              interval       = {config.interval}
                              transitionTime = {config.transitionTime}
                              showNetwork    = {config.showNetwork}
                              sort           = {config.sort}                  />, content[i])
}
