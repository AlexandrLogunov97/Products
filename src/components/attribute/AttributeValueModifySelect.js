import React, { Component } from 'react';
import '../../App.css';

export class AttributeValueModifySelect extends Component {
    render() {
        return (
            <option>
                {this.props.value}
            </option>
        );
    }
}
