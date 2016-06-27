import React, {Component} from 'react';

export default class About extends Component {
    
    setVar(){
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }
    
    render(){
        return (
            <div>
                <h1>About us </h1>
                <p>Yo this is an about page</p>
                <button onClick={this.setVar}>Sign Up</button>
            </div>
        )
    }
}