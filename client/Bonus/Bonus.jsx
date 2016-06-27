import React, {Component} from 'react';
import ReactMixin from 'react-mixin';
import BeerForm from './BeerForm.jsx';
import BeerList from './BeerList.jsx';
import BeerBarChart from './BeerBarChart.jsx';
import {ReactMeteorData} from 'meteor/react-meteor-data';
import d3 from 'd3';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


Beers = new Meteor.Collection("Beers");

export default class Bonus extends TrackerReact (Component){
	 constructor() {
        super(); 
        this.state = {
            subscription: {
                beers: Meteor.subscribe("allBeers")
            }
        }
    }

	componentWillUnmount() {
        this.state.subscription.beers.stop();
    }
	
	beers() {
		return Beers.find().fetch();
    }
      
	mapData() {  		
  		var data = [
  			{ xValue: "Sun", yValue: 0 }, 
  			{ xValue: "Mon", yValue: 0 },
  			{ xValue: "Tue", yValue: 0 },
  			{ xValue: "Wed", yValue: 0 },
  			{ xValue: "Thu", yValue: 0 },
  			{ xValue: "Fri", yValue: 0 },
  			{ xValue: "Sat", yValue: 0 },
  		];
  		this.beers().map(function(d) {
	      data[moment(d.date).day()].yValue += d.beers;
	    });
	    
	    return data;
	}

	render() {		
		return (
		  <div>
		  	<div className="page-header">
					<center>
						<h1>
						<i className="fa fa-beer"></i> Beer 
						<small> Dashboard</small></h1>
					</center>
			</div>
 
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<BeerForm />
						<BeerList beers = {this.state.beers}/>
					</div>
 
					<div className="col-md-offset-2 col-md-6">
						<BeerBarChart data={this.mapData()} />
					</div>
				</div>
			</div>        
		  </div>
		);
	}
}

