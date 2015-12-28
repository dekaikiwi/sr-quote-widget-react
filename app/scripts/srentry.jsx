/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports = React.createClass({
  displayName: "srentry",
  render: function() {
              return (
                <div className='entry'>
                      {this.props.desc}
                      <div className='authorName'>
                        {this.props.author}
                      </div>
                  </div>
                )
            }
})