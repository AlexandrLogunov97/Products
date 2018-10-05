import React, { Component } from 'react';

import {CategoryList} from './components/category/CategoryList';
import './App.css';
import { CategoryCreate } from './components/category/CategoryCreate';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      categories: []
    }
  }
  onCreateCategory=(category)=>{
    let newCategories=this.state.categories;
    newCategories.push(category);
    console.log(newCategories);
    this.setState({
      categories: newCategories
    });
  }
  onModifyCategory=(category)=>{
    let newCategories=this.state.categories;
    newCategories[newCategories.indexOf(category)]=category;
    this.setState({
      categories: newCategories
    });
  }
  render() {
    return (
      <div>
        <CategoryCreate onCreateCategory={this.onCreateCategory}/>
        <CategoryList categories={this.state.categories}/>
      </div>
    );
  }
}

export default App;
