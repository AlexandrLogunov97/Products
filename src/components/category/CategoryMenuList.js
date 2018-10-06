import React, { Component } from 'react';
import { CategoryMenuItem } from './CategoryMenuItem';
import '../../App.css';


export class CategoryMenuList extends Component {
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
                <strong>Categories:</strong>
                <div className='menu-list'>
                    {
                        this.props.categories.map((category) => (
                            <CategoryMenuItem category={category} onSelectMenuItem={this.props.onSelectMenuItem} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
