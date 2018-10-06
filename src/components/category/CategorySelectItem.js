import React, { Component } from 'react';
import { AttributeValueSelectList } from '../attribute/AttributeValueSelectList';
import '../../App.css';

export class CategorySelectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            attributes: []
        }
    }
    render() {
        return (
            <React.Fragment>
                <option>
                    {this.props.category.name}
                </option>
            </React.Fragment>
        );
    }
}
