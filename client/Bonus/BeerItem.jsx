import React, {Component} from 'react';
import d3 from 'd3';

export default class BeerItem extends Component{
  	handleClick() {
  		var id = this.props.beer._id;
  		Meteor.call("removeBeer", id, function(e) {
  			if (e) alert(e.reason);
  		});
  	}
 
	render() {
		var date = moment(this.props.beer.date).format("DD/MM/YYYY");	
		var tail = this.props.beer.beers > 1 ? "beers" : "beer";
 
		return (
			<li onClick={this.handleClick.bind(this)}>On <strong>{date}</strong> grabbed <strong>{this.props.beer.beers}</strong> {tail}</li>
		);
	}
}