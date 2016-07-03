var React = require('react');

var ListItem = React.createClass
({
  render: function() // Defining
  {
          return (
            <li>
            <h4>
            {this.props.text} // Java Script
            </h4>
            </li>
          );
  }
});

module.exports = ListItem;








/*var React = require('react');
var ListItem = React.createClass({
  render: function(){
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
});

module.exports = ListItem;*/
