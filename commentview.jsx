/** @jsx React.DOM */
'use strict'
var React = require('react')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


module.exports = React.createClass({
    displayName: 'commentView',
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
      setTimeout(this.setEntry, 300) //Time is animation time
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
          url: 'https://api.shuttlerock.com/v2/' + this.props.customer + '/boards/' + this.props.board + '/entries.json?page=' + this.page,
          dataType: 'json',
          cache: false,
          success: function(data) {
            this.entryCache = this.entryCache.concat(data)
            console.log("== ENTRY CACHE ==")
            console.log(this.entryCache)
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
            return (
                    <div className='entry'>
                      <div className='entryDesc'>
                        {entry.details.description}
                      </div>
                      <div className='author'>
                        <div className='authorName'>
                          - {entry.author.name}
                        </div>
                        <div className='authorImage'>
                        </div>
                      </div>
                    </div>

                    )
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