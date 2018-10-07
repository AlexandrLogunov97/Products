import React, { Component } from 'react';
import '../../App.css';

export class AttributeValueSelect extends Component {
  constructor(props){
    super(props);
    this.state={
      isSelected: true
    }
  }
  
  render() {
    return (
      <option selected={this.state.isSelected}>
         {this.props.value}
      </option>
    );
  }
}
