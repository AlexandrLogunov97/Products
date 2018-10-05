import React, { Component } from 'react';
import '../../App.css';

export class AttributeValueCreate extends Component {
    constructor(props){
        super(props);
        this.state={
            attributeValue: ''
        }
    }
    onCreateAttributeValue = (e) => {
        if(this.state.attributeValue)
            this.props.onCreateAttributeValue(this.state.attributeValue);
        this.setState({
            attributeValue: ''
        });
    }
    onAttributeValueChange = (e) => {
        this.setState({
            attributeValue: e.target.value
        });
    }
    render() {
        return (
            <div className='tree-item'>
                <label>Create attribute value:</label><br />
                <input onChange={this.onAttributeValueChange} value={this.state.attributeValue}/><button onClick={this.onCreateAttributeValue}>Create value</button>
            </div>
        );
    }
}
