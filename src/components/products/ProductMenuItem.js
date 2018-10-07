import React, { Component } from 'react';
import '../../App.css';

export class ProductMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            attributes: []
        }
    }
    onSelectMenuItem=(e)=>{
        this.props.onSelectMenuItem(this.props.product);
    }
    render() {
        return (
            <React.Fragment>
                <div className='menu-item' onClick={this.onSelectMenuItem}>
                    <label>{this.props.product.name } ({this.props.product.category.name})</label>
                </div>
            </React.Fragment>
        );
    }
}
