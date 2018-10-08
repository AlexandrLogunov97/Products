import React, { Component } from 'react';
import { AttributeValueModifySelect } from './AttributeValueModifySelect';
import '../../App.css';

export class AttributeValueModifySelectList extends Component {
  onAttributeValueChange = (e) => {
    this.props.onAttributeValueChange(this.props.attribute, e.target.value);
  }

  render() {
    return (
      <select onChange={this.onAttributeValueChange}>
        {
          this.props.attribute.values.map((value, index) => (
            <AttributeValueModifySelect key={index} selectedValue={this.props.selectedValue} value={value}/>
          ))
        }
      </select>
    );
  }
}
