import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class myClass extends Component {

    render() {
        let greet = "Hello World!";
        return (
            <div className="myClass">
            <h2>{greet}</h2>
            </div>
        );
    }
}
export default myClass;