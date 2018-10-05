import React, { Component } from 'react';
import {AttributeValue} from './AttributeValue';
import '../../App.css';

export class AttributeValueList extends Component {
  render() {
    return (
      <div className='tree-item'>
          {
              this.props.attributeValues.map(attributeValue=>(
                <AttributeValue value={attributeValue}/>
              ))
          }
      </div>
    );
  }
}
