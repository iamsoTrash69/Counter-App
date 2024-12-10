import React from 'react';
import './Car.css';

class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "Red",
            brand: "Ford",
            model: "Mustang",
            year: 1964
        };
    }
    
    render() {
        return (
            <div className="car-container">
                <h1 className="car-heading">{this.state.brand} Released their {this.state.model}</h1>
                <p className="car-details">in {this.state.year} in {this.state.color} Color.</p>
            </div>
        );
    }
}

export default Car;