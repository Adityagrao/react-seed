var React = require('react');
//var ReactDOM = require('react-dom');
var List = require('/List.jsx');
var ListManager = React.createClass({
  getInitialState: function()
  {
    return {items :[], newItemText:''};
  },
  handleSubmit :function(element){
    element.preventDefault();

    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);
    this.setState({items: currentItems, newItemText:''}); 
  }
});
