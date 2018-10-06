import React, { Component } from 'react';
import { AttributeList } from '../attribute/AttibuteList';
import '../../App.css';
import { AttributeCreate } from '../attribute/AttributeCreate';

export class CategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {
                name: '',
                attributes: []
            }
        }
    }
    onCreateAttribute = (attribute) => {
        let findedAttribute = this.state.category.attributes
            .find(attr => attr.name.trim().toLowerCase() === attribute.name.trim().toLowerCase() ? attr : null);

        if (!findedAttribute) {
            let newAttributes = this.state.category.attributes;
            newAttributes.push(attribute);
            this.setState({
                category: {
                    name: this.state.category.name,
                    attributes: newAttributes
                }
            });
            return true;
        }
    }
    onDeleteAttribute = (attribute) => {
        let newAttributes = this.state.category.attributes;

        let index = newAttributes.indexOf(attribute);
        newAttributes.splice(index, 1);
        this.setState({
            category: {
                name: this.state.category.name,
                attributes: newAttributes
            }
        });
    }
    onCategoryNameChange = (e) => {
        let newCategory = this.state.category;
        newCategory.name = e.target.value;
        this.setState({
            category: newCategory
        });
    }
    onCreateCategory = (e) => {
        if (this.state.category.name) {
            let result = this.props.onCreateCategory(this.state.category);
            if (result)
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
                <h3>Create category</h3>
                <label>Category name:</label><br />
                <input onChange={this.onCategoryNameChange} value={this.state.category.name} />
                <AttributeList attributes={this.state.category.attributes} onDeleteAttribute={this.onDeleteAttribute} />
                <AttributeCreate onCreateAttribute={this.onCreateAttribute} />
                <button onClick={this.onCreateCategory}>Create category</button>
            </div>
        );
    }
}
