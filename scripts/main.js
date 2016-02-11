var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render : function() {
    return (
      <div>
      <div className="header-container">
          <div className="page-header">
            <h1>Cardwall App</h1>
          </div>
          <div className="page-search">
            <form action="" id="search">
              <input type="text" id="searchBox" placeholder="Start searching..."/>
              <input type="submit" id="searchSubmit" value="Search"/>
            </form>
          </div>
      </div>
      <div className="column-container">
        <div className="card-column">
          <div className="card-column-header">
            {/* This is the header for a given card column */}
            <h2>Open</h2>
          </div>
          <div className="card-column-list">
            {/* This is where we drop a list of cards */}

          </div>
        </div>
        <div className="card-column">
          <div className="card-column-header">
            {/* This is the header for a given card column */}
            <h2>Dev In Progress</h2>
          </div>
          <div className="card-column-list">
            {/* This is where we drop a list of cards */}
            
          </div>
        </div>
        <div className="card-column">
          <div className="card-column-header">
            {/* This is the header for a given card column */}
            <h2>Dev Complete</h2>
          </div>
          <div className="card-column-list">
            {/* This is where we drop a list of cards */}
            
          </div>
        </div>
        <div className="card-column">
          <div className="card-column-header">
            {/* This is the header for a given card column */}
            <h2>QA In Progress</h2>
          </div>
          <div className="card-column-list">
            {/* This is where we drop a list of cards */}
            
          </div>
        </div>
        <div className="card-column">
          <div className="card-column-header">
            {/* This is the header for a given card column */}
            <h2>QA Complete</h2>
          </div>
          <div className="card-column-list">
            {/* This is where we drop a list of cards */}
            
          </div>
        </div>
        <div className="card-column">
          <div className="card-column-header">
            {/* This is the header for a given card column */}
            <h2>Accepted</h2>
          </div>
          <div className="card-column-list">
            {/* This is where we drop a list of cards */}
            
          </div>
        </div>
      </div>  
      </div>    
      )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));