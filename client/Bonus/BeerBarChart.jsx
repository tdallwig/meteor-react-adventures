import React, {Component} from 'react';
import d3 from 'd3';
import Chart from '../Chart/Chart.jsx';

export default class BeerBarChart extends Component {
    
    
    render() {
        return (
            <div>
                <h2>Beer Consumption Chart</h2>
                <Chart
                    type={"bar"}
                    width={600}
                    height={400}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    showTooltips={true}
                    data={this.props.data}
                />
            </div>
        );
    }
}