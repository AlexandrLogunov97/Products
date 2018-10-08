import React, { Component } from 'react';
import '../../App.css';

export class AttributeValueModifySelect extends Component {
    getSlected() {
        if (this.props.selectedValue) {
   
          return this.props.value === this.props.selectedValue;
        }
        else
          return false;
      }
    render() {
        return (
            <option selected={this.getSlected()}>
                {this.props.value}
            </option>
        );
    }
}
