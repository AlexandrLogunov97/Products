import React, { Component } from 'react';
import '../../App.css';

export class AttributeValueSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true
    }
  }
  getSlected() {
    if (this.props.value1) {
      return this.props.value === this.props.value1;
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
