import React, { Component } from 'react';
import { AttributeValueList } from './AttributeValueList';
import { AttributeValueCreate } from './AttributeValueCreate'
import '../../App.css';

export class AttributeEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attribute: {
                name: '',
                values: []
            }
        }
    }
    componentWillMount() {
        this.setState({
            attribute: this.props.attribute
        });
    }
    onCreateAttributeValue = (attributeValue) => {
        let findedValue = this.state.attribute.values
            .find(value =>
                value.trim().toLowerCase() === attributeValue.trim().toLowerCase()
                    ? value : null);
        if (!findedValue) {
            let newValues = this.state.attribute.values;
            newValues.push(attributeValue);
            this.setState({
                attribute: {
                    name: this.state.attribute.name,
                    values: newValues
                }
            });
            return true;
        }
    }
    onDeleteAttributeValue = (attributeValue) => {
        let newValues = this.state.attribute.values;
        newValues.splice(newValues.indexOf(attributeValue), 1);
        let newAttribute=this.state.attribute;
        newAttribute.values=newValues;
        this.setState({
            attribute: newAttribute
        })
    }
    onDeleteAttribute = (e) => {
        this.props.onDeleteAttribute(this.props.attribute);
    }
    
    componentDidUpdate() {
        if (!(this.state.attribute === this.props.attribute)) {
            this.setState({
                attribute: this.props.attribute
            })
        }
    }
    onAttributeNameChange = (e) => {
        let newAttribute = this.state.attribute;
        newAttribute.name = e.target.value;
        this.setState({
            attribute: newAttribute
        });
    }
    render() {
        return (
            <div className='tree-item'>
                <label>Atrtibute name:</label><br />
                <input onChange={this.onAttributeNameChange} value={this.state.attribute.name} /><button onClick={this.onDeleteAttribute}>x</button>
                <AttributeValueList attributeValues={this.state.attribute.values} onDeleteAttributeValue={this.onDeleteAttributeValue}/>
                <AttributeValueCreate onCreateAttributeValue={this.onCreateAttributeValue} />
            </div>
        );
    }
}
