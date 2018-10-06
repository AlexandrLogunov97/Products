import React, { Component } from 'react';
import { CategorySelectItem } from './CategorySelectItem';
import '../../App.css';

export class CategoryMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            attributes: []
        }
    }
    onSelectMenuItem=(e)=>{
        this.props.onSelectMenuItem(this.props.category);
    }
    render() {
        return (
            <React.Fragment>
                <div className='menu-item' onClick={this.onSelectMenuItem}>
                    <label>{this.props.category.name}</label>
                </div>
            </React.Fragment>
        );
    }
}
