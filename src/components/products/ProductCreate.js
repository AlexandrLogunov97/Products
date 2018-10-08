import React, { Component } from 'react';
import {CategorySelectList} from '../category/CategorySelectList';
import '../../App.css';
import {AttributeValueModifySelectList} from '../attribute/AttributeValueModifySelectList';

export class ProductCreate extends Component {
    constructor(props) {
        super(props);
        let selectedCategory=this.props.categories?this.props.categories[0]:{};
        this.state = {
            product: {
                name: '',
                category: selectedCategory,
                attributes: []
            }
        }
    }
    onProductNameChange = (e) => {
        let newProduct = this.state.product;
        newProduct.name = e.target.value;
        this.setState({
            product: newProduct
        });
    }
    onCreateProduct = (e) => {
        if (this.state.product.name) {
            let result = this.props.onCreateProduct(this.state.product);
            
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
        let newProduct=this.state.product;
        newProduct.category=this.props.categories.find(cat=>cat.name===category?cat:null);
        this.setState({
            product: newProduct
        })
    }
    onAttributeValueChange=(attribute,value)=>{
        let newProduct=this.state.product;
        let index=newProduct.category.attributes.indexOf(attribute);
        newProduct.category.attributes[index].selectedValue=value;
        this.setState({
            product: newProduct
        })
    }
    render() {
        let categories=this.props.categories?<CategorySelectList onCategorySelect={this.onCategorySelect} categories={this.props.categories}/>:'empty';
        let attributes=this.props.categories?this.state.product.category.attributes.map(attribute=>(
            <div>
                {attribute.name}: <AttributeValueModifySelectList attribute={attribute} onAttributeValueChange={this.onAttributeValueChange}/><br/><br/>
            </div>
        )):'Empty';
        return (
            <div className='tree-item'>
                <h3>Create product</h3>
                <label>Product name:</label><br />
                <input onChange={this.onProductNameChange} value={this.state.product.name} /><br />
                <label>Category name:</label><br />
                {
                    categories
                }
                <br/><br/>
                Attributes<br/><br/>
                {
                  attributes
                }
                
                <br/>
                <button onClick={this.onCreateProduct}>Create product</button>
            </div>
        );
    }
}
