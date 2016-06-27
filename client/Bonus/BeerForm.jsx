import React, {Component} from 'react';
import ReactDom from 'react-dom';
import d3 from 'd3';

export default class BeerForm extends Component{
	handleSubmit(e) {
		e.preventDefault();
		var numBeers = this.refs.numBeers;
		var beerDate = this.refs.beerDate;
		
		Meteor.call("insertBeer", numBeers.value, moment(beerDate.value).toDate(), function(e, r) {
			if (e) alert(e.reason)			
		});
 
		numBeers.value = "";
		beerDate.value = "";
	}
 
	render() {		
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Beer Consumption</h3>
			  </div>
			  <div className="panel-body">
			    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
				  <div className="form-group">				    
				    <div className="col-sm-10">
				      <input type="number" className="form-control" 
				      		placeholder="How many beers?" ref="numBeers" />
				    </div>
				  </div>
				  <div className="form-group">				    
				    <div className="col-sm-10">
				      <input type="date" className="form-control" ref="beerDate"/>
				    </div>
				  </div>
				  
				  <div className="form-group">
				    <div className="col-sm-10">
				      <button type="submit" className="btn btn-primary btn-block">Add</button>
				    </div>
				  </div>
				</form>
			  </div>
			</div>
		);
	}
}

