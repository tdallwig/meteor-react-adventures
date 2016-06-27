import React, {Component} from 'react';
import BeerItem from './BeerItem.jsx';
import d3 from 'd3';

export default class BeerList extends Component{	
	
	beers() {
		return Beers.find().fetch();
    }
	render() {		
		return (
			<div className="panel panel-default">			  
			  <div className="panel-heading">
			    <h3 className="panel-title">History
			    <small> click to remove</small>
			    </h3>			    
			  </div>
			  <div className="panel-body">
			    <ul className = "beers">
			    	{this.beers().map((beer)=> {
                        return <BeerItem key={beer._id} beer={beer} /> 
                    })}
			    </ul>
			  </div>
			</div>
		);
	}
}


