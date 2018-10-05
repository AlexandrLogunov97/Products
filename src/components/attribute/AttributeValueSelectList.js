import React, { Component } from 'react';
import {AttributeValueSelect} from './AttributeValueSelect';
import '../../App.css';

export class AttributeValueSelectList extends Component {
  render() {
    return (
      <select>
          {
              this.props.attributeValues.map(attributeValue=>(
                <AttributeValueSelect value={attributeValue}/>
              ))
          }
      </select>
    );
  }
}
