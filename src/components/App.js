import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        autoBind(this)

        this.state = {

        };
    }


    render() {

        return (
            <div>App</div>
        );
    }
}