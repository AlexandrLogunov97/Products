import React, { Component } from 'react';
import '../../App.css';

export class AttributeValue extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  onDeleteAttributeValue=(e)=>{
    this.props.onDeleteAttributeValue(this.state.value);
  }
  componentDidUpdate(){
    if(!(this.state.value===this.props.value)){
      this.setState({
        value: this.props.value
      })
    }
  }
  onAttributeValueChange=(e)=>{
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div >
          <label >Attribute value:</label><br/>
          <input onChange={this.onAttributeValueChange} value={this.state.value}/><button>x</button>
      </div>
    );
  }
}
