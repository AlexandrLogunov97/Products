import React, { Component } from 'react';
import '../../App.css';

export class AttributeValue extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div >
          <label>Attribute value:</label><br/>
          <input value={this.props.value}/><button>x</button>
      </div>
    );
  }
}
