import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 69
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    reset = () => {
        this.setState({ count: 69 });
    }

    render() {
        return (
            <div className="counter-container">
                <div className="counter-controls">
                    <button className="counter-button" onClick={this.increment}>+</button>
                    <h1 className="counter-heading">{this.state.count}</h1>
                    <button className="counter-button" onClick={this.decrement}>-</button>
                </div>
                <button className="reset-button" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;