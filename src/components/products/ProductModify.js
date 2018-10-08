import React, { Component } from 'react';
import { CategorySelectList } from '../category/CategorySelectList';
import '../../App.css';
import { AttributeValueModifySelectList } from '../attribute/AttributeValueModifySelectList';


export class ProductModify extends Component {
    constructor(props) {
        super(props);
        let selectedCategory = this.props.categories ? this.props.categories[0] : null;
        let newAttributes = [];
        if (selectedCategory)
            selectedCategory.attributes.map(attribute => {
                newAttributes.push({
                    attributeName: attribute.name,
                    selectedValue: ''
                });
            })
        else {
            newAttributes.push({
                attributeName: '',
                selectedValue: ''
            });
        }
        this.state = {
            product: {
                name: '',
                category: selectedCategory,
                attributes: newAttributes
            }
        }
    }
    componentDidMount(){
        this.setState({
            product: this.props.product
        })
    }
    componentDidUpdate() {
        if (!(this.state.product === this.props.product)) {
            this.setState({
                product: this.props.product
            })
        }
    }
    onProductNameChange = (e) => {
        let newProduct = this.state.product;
        newProduct.name = e.target.value;
        this.setState({
            product: newProduct
        });
    }
    onModifyProduct = (e) => {
        if (this.state.product.name) {
            this.props.onModifyProduct(this.state.product);
        }
    }
    onDeleteProduct = (e) => {
        this.props.onDeleteProduct(this.state.product);
    }
    onCategorySelect = (category) => {
        if (this.props.categories.length > 0) {
            let newProduct = this.state.product;
            let newAttributes = [];
            newProduct.category = Object.assign({}, this.props.categories.find(cat => cat.name === category ? cat : null));
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
        let newProduct = this.state.product;
        let findedAttribute = newProduct.attributes.find(attr => attribute.name === attr.attributeName);
        let index = newProduct.attributes.indexOf(findedAttribute);
        newProduct.attributes[index].selectedValue = value;
        this.setState({
            product: newProduct
        })
    }
    getSelectedValueByAttribute(attributeName) {
        let newProduct = this.state.product;
        let findedAttribute = newProduct.attributes.find(attr => attributeName === attr.attributeName);
        let index = newProduct.attributes.indexOf(findedAttribute);
        return newProduct.attributes[index].selectedValue ? newProduct.attributes[index].selectedValue : '';
    }
    render() {
        let categories ='Empty';
        if(this.props.categories){
            categories=<CategorySelectList onCategorySelect={this.onCategorySelect} categories={this.props.categories} />;
            if(this.state.product.category){
                categories=<CategorySelectList categoryName={this.state.product.category.name} onCategorySelect={this.onCategorySelect} categories={this.props.categories} />;
            }
        }
        let attributes = 'Empty';
        if (this.state.product.category) {
            if (this.state.product.category.attributes) {
                if (this.state.product.category.attributes.length) {
                    attributes = this.state.product.category.attributes.map(attribute => (
                        <div>
                            {attribute.name}: <AttributeValueModifySelectList selectedValue={this.getSelectedValueByAttribute(attribute.name)} attribute={attribute} onAttributeValueChange={this.onAttributeValueChange} /><br /><br />
                        </div>
                    ));
                }
            }
        }
        return (
            <div className='tree-item'>
                <h3>Modify product</h3>
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
                <button onClick={this.onModifyProduct}>Modify product</button> <button onClick={this.onDeleteProduct}>Delete product</button>
            </div>
        );
    }
}
