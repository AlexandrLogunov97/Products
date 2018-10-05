import React, { Component } from 'react';
import { AttributeValueSelectList } from '../attribute/AttributeValueSelectList';
import '../../App.css';

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            attributes: []
        }
    }
    render() {
        return (
            <div className='tree-item'>
                <label>Category name: {this.props.category.name}</label><br />
                {
                    this.props.category.attributes.map(attribute=>(
                        <label >Attribute name: {attribute.name} <AttributeValueSelectList attributeValues={attribute.values}/></label>
                    ))
                }
            </div>
        );
    }
}
