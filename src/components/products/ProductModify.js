import React, { Component } from 'react';
import {CategorySelectList} from '../category/CategorySelectList';
import '../../App.css';
import {AttributeValueSelectList} from '../attribute/AttributeValueSelectList';


export class ProductModify extends Component {
    constructor(props) {
        super(props);
        let selectedCategory=this.props.categories?this.props.categories[0]:{};
        this.state = {
            product: {
                name: '',
                category: selectedCategory
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
        newProduct.category=this.props.categories.find(cat=>cat.name===category?cat:null);
        console.log(newProduct.category);
        this.setState({
            product: newProduct
        })
    }
    render() {
        let categories=this.props.categories && this.state.product.category ?<CategorySelectList onCategorySelect={this.onCategorySelect} categories={this.props.categories}/>:'empty';
        let attributes=this.props.categories && this.state.product.category ?this.state.product.category.attributes.map(attribute=>(
            <div>
                {attribute.name}: <AttributeValueSelectList attribute={attribute}/><br/><br/>
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
