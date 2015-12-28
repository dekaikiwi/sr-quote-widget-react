/** @jsx React.DOM */
'use strict'
var React = require('react')

module.exports = React.createClass({
  displayName: "srentry",
  render: function() {
              return (
                <div className='sr-quote'>
                    <div className="quoteText">
                      {this.props.desc}
                    </div>
                    <div className='authorName'>
                      - {this.props.author}
                    </div>
                  </div>
                )
            }
})