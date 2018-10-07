import React, { Component } from 'react';
import { AttributeValueSelectList } from '../attribute/AttributeValueSelectList';
import '../../App.css';

export class CategorySelectItem extends Component {
    getSelected(){
        if(this.props.categoryName)
            return this.props.category.name===this.props.categoryName;
        else
            return false;
    }
    render() {
        return (
            <React.Fragment>
                <option selected={this.getSelected()}>
                    {this.props.category.name}
                </option>
            </React.Fragment>
        );
    }
}
