import React, { Component } from 'react';
import {CategorySelectList} from '../category/CategorySelectList';
import '../../App.css';
import {AttributeValueSelectList} from '../attribute/AttributeValueSelectList';


export class ProductCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                category: {}
            },
            selectedCategory: this.props.categories[0]
        }
    }
    onProductNameChange = (e) => {
        let newCategory = this.state.category;
        newCategory.name = e.target.value;
        this.setState({
            category: newCategory
        });
    }
    onCreateProduct = (e) => {
        if (this.state.product.name) {
            let result = this.props.onCreateProduct(this.state.category);
            if (result)
                this.setState({
                    product: {
                        name: '',
                        category: {}
                    }
                });
        }
    }
    onCategorySelect=(category)=>{
        this.setState({
            selectedCategory: this.props.categories.find(cat=>cat.name===category?cat:null)
        })
    }
    render() {
        console.log(this.state.selectedCategory.attributes);
        return (
            <div className='tree-item'>
                <h3>Create product</h3>
                <label>Product name:</label><br />
                <input onChange={this.onProductNameChange} value={this.state.product.name} /><br />
                <label>Category name:</label><br />
                <CategorySelectList onCategorySelect={this.onCategorySelect} categories={this.props.categories}/><br/><br/>
                {
                    this.state.selectedCategory.attributes.map(attribute=>(
                        <div>
                            {attribute.name}: <AttributeValueSelectList attributeValues={attribute.values}/><br/><br/>
                        </div>
                    ))
                }
                <br/>
                <button onClick={this.onCreateCategory}>Create product</button>
            </div>
        );
    }
}
