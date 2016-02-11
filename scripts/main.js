var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
  render : function() {
    return (
      <div className="card-view">
        <p>This is hello</p>
      </div>      
      )
  }
});

ReactDOM.render(Card, document.querySelector('#main'));