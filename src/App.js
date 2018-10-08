import React, { Component } from 'react';

import { CategoryMenuList } from './components/category/CategoryMenuList';
import './App.css';
import { CategoryCreate } from './components/category/CategoryCreate';
import { CategoryModify } from './components/category/CategoryModify';
import {ProductMenuList} from './components/products/ProductMenuList';
import {ProductCreate} from './components/products/ProductCreate';
import {ProductModify} from './components/products/ProductModify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: {},
      products: [],
      selectedProduct: {},
      leftMode: 'categories',
      rightMode: 'createCategory'
    }
  }
  genValues(){
    let countValues=Math.floor(Math.random() * 4)+1;
    let newValues=[]
    for (let index = 0; index<countValues; index++) {
      newValues.push(`Value ${index+1}`)
    }
    return newValues;
  }
  genAttr(){
    let countAttr=Math.floor(Math.random() * 3)+1;
    let attributes=[];
    for (let index = 0; index<countAttr; index++) {
      attributes.push({
        name: `Attribute ${index+1}`,
        values: this.genValues()
      })
    }
    return attributes;
  }
  componentDidMount() {
    let newCategories = [];
    for (let index = 0; index < 100; index++) {
      newCategories.push({
        name: 'Category ' + (index + 1),
        attributes: this.genAttr(),
      });
    }
    this.setState({
      categories: newCategories,
      selectedCategory: newCategories[0]
    });
  
  }
  onCreateCategory = (category) => {
    let findedCategory = this.state.categories.find(cat => cat.name.trim().toLowerCase() === category.name.trim().toLowerCase() ? cat : null);
    if (!findedCategory) {
      let newCategories = this.state.categories;
      newCategories.push(category);
      this.setState({
        rightMode: 'modifyCategory',
        selectedCategory: newCategories[newCategories.length-1],
        categories: newCategories
      });
      return true;
    }
  }
  onModifyCategory = (category) => {
    let newCategories = this.state.categories;
    newCategories[newCategories.indexOf(category)] = category;
    this.setState({
      categories: newCategories
    });
  }
  onDeleteCategory=(category)=>{
    let newCategories = this.state.categories;
    let index=newCategories.indexOf(category);
    newCategories.splice(index,1);
    let newMode='createCategory';
    let newSelectedCategory={};
    if(newCategories.length>0){
      newMode='modifyCategory';
      newSelectedCategory=newCategories[0];
    }
    this.setState({
      categories: newCategories,
      rightMode: newMode,
      selectedCategory:newSelectedCategory
    });
  }
  onSelectCategoryMenuItem = (category) => {
    this.setState({
      rightMode: 'modifyCategory',
      selectedCategory: category
    });
  }
  onSelectProductMenuItem = (product) => {
    this.setState({
      rightMode: 'modifyProduct',
      selectedProduct: product
    });
  }
  onCreateProduct=(product)=>{
    let findedProduct = this.state.products.find(prod => prod.name.trim().toLowerCase() === product.name.trim().toLowerCase() ? prod : null);
    if (!findedProduct) {
      let newProducts = this.state.products;
      newProducts.push(product);
      this.setState({
        rightMode: 'modifyProduct',
        selectedProduct: newProducts[newProducts.length-1],
        products: newProducts
      });
      return true;
    }
  }
  onModifyProduct=(product)=>{
    let newProducts = this.state.products;
    newProducts[newProducts.indexOf(product)] = product;
    this.setState({
      products: newProducts
    });
  }
  onDeleteProduct=(product)=>{
    let newProducts = this.state.products;
    let index=newProducts.indexOf(product);
    newProducts.splice(index,1);
    let newMode='createProduct';
    let newSelectedProduct={};
    if(newProducts.length>0){
      newMode='modifyProduct';
      newSelectedProduct=newProducts[0];
    }
    this.setState({
      products: newProducts,
      rightMode: newMode,
      selectedProduct:newSelectedProduct
    });
  }

  getLeftMode = () => {
    let mode = {};
    if (this.state.leftMode === 'categories') {
      mode = <CategoryMenuList categories={this.state.categories} onSelectMenuItem={this.onSelectCategoryMenuItem} />;
    } else if (this.state.leftMode === 'products') {
      mode = <ProductMenuList products={this.state.products} onSelectMenuItem={this.onSelectProductMenuItem}/>;
    }
    return mode;
  }
  getRightMode = () => {
    let mode = {};
    if (this.state.rightMode === 'createCategory') {
      mode = <CategoryCreate onCreateCategory={this.onCreateCategory} />;
    } else if (this.state.rightMode === 'modifyCategory') {
      mode = <CategoryModify onDeleteCategory={this.onDeleteCategory} category={this.state.selectedCategory} onModifyCategory={this.onModifyCategory} />;
    }
    else if (this.state.rightMode === 'createProduct') {
      mode = <ProductCreate onCreateProduct={this.onCreateProduct} categories={this.state.categories} />;
    }
    else if (this.state.rightMode === 'modifyProduct') {
      mode = <ProductModify onDeleteProduct={this.onDeleteProduct} product={this.state.selectedProduct} onModifyProduct={this.onModifyProduct} categories={this.state.categories} />;
    }
    return mode;
  }
  onSelectLeftMode = (e) => {
    let newLeftMode='';
    let newRightMode='';
    if(e.target.value==='products'){
      newLeftMode='products';
      if(this.state.products.length>0){
        newRightMode='modifyProduct';
      }
      else{
        newRightMode='createProduct';
      }
    }else if(e.target.value==='categories'){
      newLeftMode='categories';
      if(this.state.categories.length>0){
        newRightMode='modifyCategory';
      }
      else{
        newRightMode='createCategory';
      }
    }
    this.setState({
      leftMode: newLeftMode,
      rightMode: newRightMode
    });
  }
  onSelectRightMode = (e) => {
    let newLeftMode='';
    let newRightMode='';
    if(e.target.value==='createProduct'){
      newRightMode='createProduct';
      newLeftMode='products';
    }else if(e.target.value==='createCategory'){
      newRightMode='createCategory';
      newLeftMode='categories';
    }
    this.setState({
      leftMode: newLeftMode,
      rightMode: newRightMode
    });
  }
  render() {
    let leftMode = this.getLeftMode();
    let rightMode = this.getRightMode();
    return (
      <div>
        <div className='panel-top'>
          <button className='item-left-first' onClick={this.onSelectRightMode} value='createCategory'>Add category</button>
          <button className='item-left' onClick={this.onSelectRightMode} value='createProduct'>Add product</button>
          <button className='item-left' onClick={this.onSelectLeftMode} value='categories'>Categories</button>
          <button className='item-left' onClick={this.onSelectLeftMode} value='products'>Products</button>
        </div>
        <br />
        <br />
        <div className='panel-left'>
          {
            leftMode
          }
        </div>
        <div className='panel-right'>
          {
            rightMode
          }
        </div>
      </div>
    );
  }
}

export default App;
