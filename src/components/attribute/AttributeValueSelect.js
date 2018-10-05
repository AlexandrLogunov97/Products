import React, { Component } from 'react';
import '../../App.css';

export class AttributeValueSelect extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <option>
         {this.props.value}
      </option>
    );
  }
}
