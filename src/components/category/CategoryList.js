import React, { Component } from 'react';
import { AttributeList } from '../attribute/AttibuteList';
import {Category} from './Category';
import '../../App.css';


export class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            attributes: []
        }
    }
    render() {
        return (
            <div className='tree-item'>
                {
                    this.props.categories.map((category)=>(
                        <Category category={category}/>
                    ))
                }
            </div>
        );
    }
}
