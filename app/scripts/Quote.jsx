/** @jsx React.DOM */
'use strict'
var React = require('react')
var FontAwesome = require('react-fontawesome')

module.exports = React.createClass({
  displayName: "srentry",
  render: function() {
              var entry = this.props.entry
              return (
                <div className='sr-quote'>
                    <div className="quoteText">
                      {entry.details.description}
                    </div>
                    <div className="likes">
                      <FontAwesome name="heart"/> {entry.statistics.likes}
                    </div>
                    <div className='authorName'>
                      - {entry.author.name}
                      <div className='sourceNetwork'>
                        <a href={entry.source.url}>{entry.source.network}</a>
                      </div>
                    </div>
                  </div>
                )
            }
})