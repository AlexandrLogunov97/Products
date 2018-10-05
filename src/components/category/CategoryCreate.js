import React, { Component } from 'react';
import { AttributeList } from '../attribute/AttibuteList';
import '../../App.css';
import { AttributeCreate } from '../attribute/AttributeCreate';

export class CategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:{
                name: '',
                attributes: []
            }
        }
    }
    onCreateAttribute = (attribute) => {
        let newAttributes = this.state.category.attributes;
        newAttributes.push(attribute);
        this.setState({
            category:{
                name: this.state.category.name,
                attributes: newAttributes
            }
        });
    }
    onDeleteAttribute=(attribute)=>{
        let newAttributes=this.state.category.attributes;

        let index=newAttributes.indexOf(attribute);
        newAttributes.splice(index,1);
        this.setState({
            category:{
                name: this.state.category.name,
                attributes: newAttributes
            }
        });
    }
    onCategoryNameChange = (e) => {
        let newCategory=this.state.category;
        newCategory.name=e.target.value;
        this.setState({
            category: newCategory
        });
    }
    onCreateCategory=(e)=>{
        if(this.state.category.name)
        {
            this.props.onCreateCategory(this.state.category);
            this.setState({
                category: {
                    name: '',
                    attributes: []
                }
            });
        }
    }
    render() {
        return (
            <div className='tree-item'>
                <label>Category name:</label><br />
                <input onChange={this.onCategoryNameChange} value={this.state.category.name}/>
                <AttributeList attributes={this.state.category.attributes} onDeleteAttribute={this.onDeleteAttribute}/>
                <AttributeCreate onCreateAttribute={this.onCreateAttribute} />
                <button onClick={this.onCreateCategory}>Create category</button>
            </div>
        );
    }
}