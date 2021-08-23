import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const list = [
    {
        firstname: 'Chris',
        lastname: 'Smith',
        Cell: '071212498',
        email: 'chris@gmail.com',
        vacinne: 'yes',
        ID: 0,
    },
    {
        firstname: 'Fabio',
        lastname: 'Pita',
        Cell: '0712345098',
        email: 'chris@gmail.com',
        vacinne: 'yes',
        ID: 1,
    },
    {
        firstname: 'Heino',
        lastname: 'du Plessis',
        Cell: '0712345555',
        email: 'chris@gmail.com',
        vacinne: 'yes',
        ID: 2,
    },
    {
        firstname: 'Jeff',
        lastname: 'Sauer',
        Cell: '0744445098',
        email: 'chris@gmail.com',
        vacinne: 'yes',
        ID: 3,
    },
    {
        firstname: 'Justin',
        lastname: 'Sam',
        Cell: '0712323234',
        email: 'chris@gmail.com',
        vacinne: 'yes',
        ID: 4,
    },
];

class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list,
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss(id) {
        const isNotId = item => item.ID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList });
    }

    render() {


        return (
            <div className="myEmployees">
                {this.state.list.map(item =>
                    <div key={item.ID}>
                        <span>{item.firstname}</span>
                        <span>{item.lastname}</span>
                        <span>{item.Cell}</span>
                        <span>{item.email}</span>
                        <span>{item.ID}</span>
                        <span>{item.vacinne}</span>
                        <span>
                            <button
                                onClick={() => this.onDismiss(item.ID)}
                                type="button"
                            >
                                Dismiss
                            </button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}


export default Employees;