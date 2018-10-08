import React, { Component } from 'react';
import '../../App.css';

export class AttributeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attribute: {
        name: '',
        values: []
      }
    }
  }
  onCreateAttribute = (e) => {
    if (this.state.attribute.name) {
      let result = this.props.onCreateAttribute(this.state.attribute);
      if (result) {
        this.setState({
          attribute: {
            name: '',
            values:[]
          }
        })
      }
    }
  }
  onChangeAttributeName = (e) => {
    this.setState({
      attribute: {
        name: e.target.value,
        values: []
      }
    });
  }
  render() {
    return (
      <div className='tree-item'>
        <label>Attribute name:</label><br />
        <input onChange={this.onChangeAttributeName} value={this.state.attribute.name} /><button onClick={this.onCreateAttribute}>Create attribute</button>
      </div>
    );
  }
}
