import React, { Component } from 'react';
import { AttributeValueSelect } from './AttributeValueSelect';
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
            <AttributeValueSelect key={index} value={value}/>
          ))
        }
      </select>
    );
  }
}
