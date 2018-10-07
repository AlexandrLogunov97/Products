import React, { Component } from 'react';
import { AttributeValueSelect } from './AttributeValueSelect';
import '../../App.css';

export class AttributeValueSelectList extends Component {
  onAttributeValueChange = (e) => {
    this.props.onAttributeValueChange(this.props.attribute, e.target.value);
  }
  getAttributeValue(val) {
    if (this.props.attribute)
      return this.props.attribute.values.find(value => value === val ? value : '');
    else
      return null;
  }
  render() {
    return (
      <select onChange={this.onAttributeValueChange}>
        {
          this.props.attribute.values.map((value, index) => (
            <AttributeValueSelect key={index} value={value} value1={this.getAttributeValue(this.props.attribute.selectedValue)} />
          ))
        }
      </select>
    );
  }
}
