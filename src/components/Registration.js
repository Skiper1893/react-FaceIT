import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Eugene"
        }
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
    };

    render() {
            return (
            <div>
                <p>Welcome {this.state.name}</p>
                {this.props.items.map((item, index) =>
                    <p key={index}><a href={item.link}>{item.label}</a></p>
                )}
            </div>
        );
    }
}