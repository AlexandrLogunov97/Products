import React, { Component } from 'react';
import { ProductMenuItem } from './ProductMenuItem';
import '../../App.css';


export class ProductMenuList extends Component {
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
                <strong>Products:</strong>
                <div className='menu-list'>
                    {
                        this.props.products.map((product,index) => (
                            <ProductMenuItem key={index} product={product} onSelectMenuItem={this.props.onSelectMenuItem} />
                        ))
                    }
                </div>
            </div>
        );
    }
}
