/** @jsx React.DOM */
'use strict'
var React = require('react')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Quote = require('./Quote')


module.exports = React.createClass({
    displayName: 'QuoteView',
    init: true,
    page: 1,
    stopLoading: false,
    entryCache: [],
    getInitialState: function() {

      return {
              data: [],
              currentEntry: null
            };

    },
    nextEntry: function() {
      if(this.state.data.length <= 0 && !this.stopLoading) {
        this.loadEntries()
      } else if (this.state.data.length <= 0 && this.stopLoading){
        console.log('Load from entryCache');
        this.setState({data: this.entryCache.slice()})
      }
      this.clearEntry()
      setTimeout(this.setEntry, this.props.transitionTime) //Time is animation time
    },
    clearEntry: function() {
      console.log('clearEntry')
      this.setState({currentEntry: null})
    },
    setEntry: function() {
      console.log("nextEntry")
      var currentData = this.state.data

      var next = currentData.pop()
      this.setState({currentEntry: next, data: currentData})
      console.log(currentData);
    },
    loadEntries: function() {
       jQuery.ajax({
          url: 'https://api.shuttlerock.com/v2/' + this.props.customer + '/boards/' + this.props.board + '/entries.json?page=' + this.page + '&sort_method=' + this.props.sort,
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.entryCache = this.entryCache.concat(data)

            this.setState({data: data});
            if (data.length <= 0) {
              this.stopLoading = true;
            }
            if (this.init) {
              this.setEntry();
              setInterval(this.nextEntry, this.props.interval)
              this.init = false
            }
            this.page += 1
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },
    componentDidMount: function() {
      if(this.state.data.length <= 0 && !this.stopLoading) {
        this.loadEntries()
      }
    },
    render: function(){
        var createEntry = function(entry) {
          if (entry != null) {
            return ( <Quote entry={entry}/>)
          }
        }

        var currentEntry = createEntry(this.state.currentEntry)

        return (
            <div>
                <div data={this.state.data} className="entries">
                   <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                    {currentEntry}
                   </ReactCSSTransitionGroup>
                </div>
            </div>
          )

    }
});