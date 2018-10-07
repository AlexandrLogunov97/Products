import React, { Component } from 'react';
import { CategorySelectItem } from './CategorySelectItem';
import '../../App.css';


export class CategorySelectList extends Component {
    onCategoryChange = (e) => {
        this.props.onCategorySelect(e.target.value);
    }
    render() {
        return (
            <select onChange={this.onCategoryChange}>
                {
                    this.props.categories.map((category,index) => (
                        <CategorySelectItem key={index} category={category} onSelectMenuItem={this.props.onSelectMenuItem} />
                    ))
                }
            </select>
        );
    }
}
