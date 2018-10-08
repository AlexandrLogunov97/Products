import React, { Component } from 'react';
import {CategorySelectList} from '../category/CategorySelectList';
import '../../App.css';
import {AttributeValueModifySelectList} from '../attribute/AttributeValueModifySelectList';


export class ProductModify extends Component {
    constructor(props) {
        super(props);
        let selectedCategory=this.props.categories?this.props.categories[0]:{};
        selectedCategory=Object.assign({},selectedCategory);
        let newAttributes=[];
        selectedCategory.attributes.map(attribute=>{
            newAttributes.push({
                attributeName: attribute.name,
                selectedValue: ''
            });
        })
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
    componentDidUpdate(){
       if(!(this.state.product===this.props.product)){
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
    onCategorySelect=(category)=>{
        let newProduct=this.state.product;
        let newAttributes=[];
        newProduct.category=Object.assign({},this.props.categories.find(cat=>cat.name===category?cat:null));
        newProduct.category.attributes.forEach(attribute=>{
            newAttributes.push({
                attributeName: attribute.name,
                selectedValue: ''
            });
        });
        this.setState({
            product: newProduct
        })
    }
    onAttributeValueChange=(attribute,value)=>{
        let newProduct=this.state.product;
        console.log(this.state.product);
        let findedAttribute=newProduct.attributes.find(attr=>attribute.name===attr.attributeName);
        let index=newProduct.attributes.indexOf(findedAttribute);
        newProduct.attributes[index].selectedValue=value;
        this.setState({
            product: newProduct
        })
    }
    getSelectedValueByAttribute(attributeName){
        console.log(this.state.product);
        let newProduct=this.state.product;
        let findedAttribute=newProduct.attributes.find(attr=>attributeName===attr.attributeName);
        let index=newProduct.attributes.indexOf(findedAttribute);
        return newProduct.attributes[index].selectedValue?newProduct.attributes[index].selectedValue:'';
    }
    render() {
        let categories=this.props.categories && this.state.product.category ?<CategorySelectList categoryName={this.state.product.category.name} onCategorySelect={this.onCategorySelect} categories={this.props.categories}/>:'empty';
        let attributes=this.props.categories && this.state.product.category ?this.state.product.category.attributes.map(attribute=>(
            <div>
                {attribute.name}: <AttributeValueModifySelectList selectedValue={this.getSelectedValueByAttribute(attribute.name)} attribute={attribute} onAttributeValueChange={this.onAttributeValueChange}/><br/><br/>
            </div>
        )):'Empty';
        return (
            <div className='tree-item'>
                <h3>Modify product</h3>
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
                <button onClick={this.onModifyProduct}>Modify product</button> <button onClick={this.onDeleteProduct}>Delete product</button>
            </div>
        );
    }
}
