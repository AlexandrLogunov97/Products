import React, { Component } from 'react';
import '../../App.css';

export class AttributeValue extends Component {
  constructor(props){
    super(props);
    this.state={
      value: ''
    }
  }
  onDeleteAttributeValue=(e)=>{
    this.props.onDeleteAttributeValue(this.state.value);
  }
  componentDidMount(){
    this.setState({
      value: this.props.value
    })
  }
  componentDidUpdate(){
    if(!(this.state.value === this.props.value)){
      this.setState({
        value: this.props.value
      })
    }
  }
  onAttributeValueChange=(e)=>{
    let newValue=e.target.value;
    this.setState({
      value: newValue
    });
  }
  render() {
    return (
      <div >
          <label >Attribute value:</label><br/>
          <input onChange={this.onAttributeValueChange} value={this.state.value}/><button onClick={this.onDeleteAttributeValue}>x</button>
      </div>
    );
  }
}
