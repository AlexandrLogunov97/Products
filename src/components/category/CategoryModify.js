import React, { Component } from 'react';
import { AttributeList } from '../attribute/AttibuteList';
import '../../App.css';
import { AttributeCreate } from '../attribute/AttributeCreate';

export class CategoryModify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {
                name: '',
                attributes: []
            }
        }
    }
    componentDidUpdate() {
        if (this.props.category)
            if (!(this.state.category === this.props.category)) {
                this.setState({
                    category: this.props.category
                });

            }
    }
    onCreateAttribute = (attribute) => {
        let findedAttribute = this.state.category.attributes
            .find(attr => attr.name.trim().toLowerCase() === attribute.name.trim().toLowerCase() ? attr : null);
        if (!findedAttribute) {
            console.log(this.state.category.attributes);
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
    onModifyCategory = (e) => {
        if (this.state.category.name)
            this.props.onModifyCategory(this.state.category);
    }
    render() {
        return (
            <div className='tree-item'>
                <h3>Modify category:</h3>
                <label>Category name</label><br />
                <input onChange={this.onCategoryNameChange} value={this.state.category.name} />
                <AttributeList attributes={this.state.category.attributes} onDeleteAttribute={this.onDeleteAttribute} />
                <AttributeCreate onCreateAttribute={this.onCreateAttribute} />
                <br/>
                <button onClick={this.onModifyCategory}>Modify category</button> <button onClick={this.onModifyCategory}>Delete category</button>
            </div>
        );
    }
}
