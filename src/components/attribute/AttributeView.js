import React, { Component } from 'react';
import { AttributeValueList } from './AttributeValueList';
import '../../App.css';

export class Attribute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attribute: {
                name: '',
                values: []
            }
        }
    }
    componentWillMount(){
        this.setState({
            attribute: this.props.attribute
        });
    }
    onCreateAttributeValue=(attributeValue)=>{
        let newValues=this.state.attribute.values;
        console.log(this.state.values);
        newValues.push(attributeValue);
        this.setState({
            attribute:{
                name: this.state.attribute.name,
                values: newValues
            }
        })
    }
    onDeleteAttributeValue=(attributeValue)=>{
        let newValues=this.state.values;
        newValues.splice(newValues.indexOf(attributeValue),1);
        this.setState({
            values: newValues
        })
    }
    onDeleteAttribute=(e)=>{
        this.props.onDeleteAttribute(this.props.attribute);
    }
    componentDidUpdate(){
        if(!(this.state.attribute===this.props.attribute)){
            this.setState({
                attribute: this.props.attribute
            })
        }
    }
    onAttributeNameChange=(e)=>{
        let newAttribute=this.state.attribute;
        newAttribute.name=e.target.value;
        this.setState({
            attribute: newAttribute
        });
    }
    render() {
        return (
            <div className='tree-item'>
                <label>Atrtibute name: {this.props.attribute.name}</label><br/>
            </div>
        );
    }
}
