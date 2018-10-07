import React, { Component } from 'react';
import {AttributeValueSelect} from './AttributeValueSelect';
import '../../App.css';

export class AttributeValueSelectList extends Component {
  onAttributeValueChange=(e)=>{

  }
  render() {
    return (
      <select onChange={this.onAttributeValueChange}>
          {
              this.props.attribute.values.map((value,index)=>(
                <AttributeValueSelect key={index} value={value}/>
              ))
          }
      </select>
    );
  }
}
