import React, { Component } from 'react';
import { CategorySelectList } from '../category/CategorySelectList';
import '../../App.css';
import { AttributeValueSelectList } from '../attribute/AttributeValueSelectList';

export class ProductCreate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                name: '',
                category: {},
                attributes: []
            }
        }
    }

   /* static getDerivedStateFromProps(props, state) {
        let selectedCategory;
        if (props.categories.length) {

            selectedCategory = Object.assign({}, props.categories ? props.categories[0] : null);
            let newAttributes = [];
            if (selectedCategory)
                selectedCategory.attributes.map(attribute => {
                    newAttributes.push({
                        attributeName: attribute.name,
                        selectedValue: attribute.values[0]
                    });
                })
            console.log(state);
            state = {
                product: {
                    name: state.product.name,
                    category: selectedCategory,
                    attributes: newAttributes
                }
            }
            return state;
        }
        return null;
    }*/
    onProductNameChange = (e) => {
        let newProduct = this.state.product;
        newProduct.name = e.target.value;
        this.setState({
            product: newProduct
        });
    }
    onCreateProduct = (e) => {
        if (this.state.product.name && this.state.product.category) {
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
    onCategorySelect = (category) => {
        if (this.props.categories.length > 0) {
        
            let newProduct = this.state.product;
            let newAttributes = [];
            let selectedCategory = this.props.categories.find(cat => cat.name === category ? cat : null);
            newProduct.category = Object.assign({}, selectedCategory);
            newProduct.category.attributes.map(attribute => {
                newAttributes.push({
                    attributeName: attribute.name,
                    selectedValue: attribute.values[0]
                });
            });
            newProduct.attributes = newAttributes;

            this.setState({
                product: newProduct
            })
        }
    }
    onAttributeValueChange = (attribute, value) => {
        if (this.state.product.category) {
            let newProduct = this.state.product;
            let findedAttribute = newProduct.attributes.find(attr => attribute.name === attr.attributeName);
            let index = newProduct.attributes.indexOf(findedAttribute);
            newProduct.attributes[index].selectedValue = value;
            this.setState({
                product: newProduct
            })
        }
    }
    render() {
        let categories = this.props.categories ? <CategorySelectList onCategorySelect={this.onCategorySelect} categories={this.props.categories} /> : 'empty';
        let attributes = 'Empty';
        if (this.state.product.category) {
            if (this.state.product.category.attributes) {
                attributes = this.state.product.category.attributes.map(attribute => (
                    <div>
                        {attribute.name}: <AttributeValueSelectList attribute={attribute} onAttributeValueChange={this.onAttributeValueChange} /><br /><br />
                    </div>
                ));

            }
        }

        return (
            <div className='tree-item'>
                <h3>Create product</h3>
                <label>Product name:</label><br />
                <input onChange={this.onProductNameChange} value={this.state.product.name} /><br />
                <label>Category name:</label><br />
                {
                    categories
                }
                <br /><br />
                Attributes<br /><br />
                {
                    attributes
                }

                <br />
                <button onClick={this.onCreateProduct}>Create product</button>
            </div>
        );
    }
}
