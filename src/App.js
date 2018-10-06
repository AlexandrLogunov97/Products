import React, { Component } from 'react';

import { CategoryMenuList } from './components/category/CategoryMenuList';
import './App.css';
import { CategoryCreate } from './components/category/CategoryCreate';
import { CategoryModify } from './components/category/CategoryModify';
import { CategorySelectList } from './components/category/CategorySelectList';
import {ProductMenuList} from './components/products/ProductMenuList';
import {ProductCreate} from './components/products/ProductCreate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: {},
      products: [],
      selectedProduct: {},
      leftMode: 'categories',
      rightMode: 'modifyCategory'
    }
  }
  genValues(){
    let countValues=Math.floor(Math.random() * 10);
    let newValues=[]
    for (let index = 0; index<countValues; index++) {
      newValues.push(`Value ${index+1}`)
    }
    return newValues;
  }
  genAttr(){
    let countAttr=Math.floor(Math.random() * 10);
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
    for (let index = 0; index < 5; index++) {
      newCategories.push({
        name: 'Category ' + (index + 1),
        attributes: this.genAttr(),
      });
    }
    let newProducts = [];
    for (let index = 0; index < 5; index++) {
      newProducts.push({
        name: 'Product ' + (index + 1),
        category: newCategories[0],
      });
    }
    this.setState({
      categories: newCategories,
      products: newProducts,
      selectedCategory: newCategories[0],
      selectedProduct: newProducts[0]
    });
  }
  onCreateCategory = (category) => {
    let findedCategory = this.state.categories.find(cat => cat.name.trim().toLowerCase() === category.name.trim().toLowerCase() ? cat : null);
    if (!findedCategory) {
      let newCategories = this.state.categories;
      newCategories.push(category);
      this.setState({
        selectedCategory: newCategories[newCategories.length-1],
        rightMode: 'modifyCategory',
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
  onSelectCategoryMenuItem = (category) => {
    this.setState({
      selectedCategory: category,
      rightMode: 'modifyCategory'

    })
    console.log(category);
  }
  onSelectMenuItems = (e) => {

  }
  getLeftMode = () => {
    let mode = {};
    if (this.state.leftMode === 'categories') {
      mode = <CategoryMenuList categories={this.state.categories} onSelectMenuItem={this.onSelectCategoryMenuItem} />;
    } else if (this.state.leftMode === 'products') {
      mode = <ProductMenuList products={this.state.products} />;
    }
    return mode;
  }
  getRightMode = () => {
    let mode = {};
    if (this.state.rightMode === 'createCategory') {
      mode = <CategoryCreate onCreateCategory={this.onCreateCategory} />;
    } else if (this.state.rightMode === 'modifyCategory') {
      mode = <CategoryModify category={this.state.selectedCategory} onModifyCategory={this.onModifyCategory} />;
    }
    else if (this.state.rightMode === 'createProduct') {
      mode = <ProductCreate categories={this.state.categories} />;
    }
    return mode;
  }
  onSelectLeftMode = (e) => {
    this.setState({
      leftMode: e.target.value
    });
  }
  onSelectRightMode = (e) => {
    
    this.setState({
      rightMode: e.target.value
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
