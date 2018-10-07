import React, { Component } from 'react';
import {AttributeValue} from './AttributeValue';
import '../../App.css';

export class AttributeValueList extends Component {
  render() {
    return (
      <div className='tree-item'>
          {
              this.props.attributeValues.map((attributeValue,index)=>(
                <AttributeValue key={index} value={attributeValue} onAttributeValueChange={this.props.onAttributeValueChange} onDeleteAttributeValue={this.props.onDeleteAttributeValue}/>
              ))
          }
      </div>
    );
  }
}
