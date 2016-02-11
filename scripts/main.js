var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render : function() {
    return (
      <div className="container">
        <div className="card-column">This is a column</div>
        <div className="card-column">This is a column</div>
        <div className="card-column">This is a column</div>
        <div className="card-column">This is a column</div>
        <div className="card-column">This is a column</div>
        <div className="card-column">This is a column</div>
      </div>      
      )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));