import React, { Component } from 'react';
import { CategorySelectItem } from './CategorySelectItem';
import '../../App.css';


export class CategorySelectList extends Component {
    constructor(props) {
        super(props);

    }
    onCategoryChange=(e)=>{
        this.props.onCategorySelect(e.target.value);
    }
    render() {
        console.log(this.props.categories);
        return (
            <select onChange={this.onCategoryChange}>
                {
                    this.props.categories.map((category) => (
                        <CategorySelectItem category={category} onSelectMenuItem={this.props.onSelectMenuItem} />
                    ))
                }
            </select>
        );
    }
}
