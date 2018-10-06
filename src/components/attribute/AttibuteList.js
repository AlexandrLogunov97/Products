import React, { Component } from 'react';
import {AttributeEdit} from './AttributeEdit';
import '../../App.css';

export class AttributeList extends Component {
  render() {
    return (
      <div>
          {
            this.props.attributes.map(( attribute ,index) => (
              <AttributeEdit attribute={attribute} onDeleteAttribute={this.props.onDeleteAttribute}/>
            ))
          }
      </div>
    );
  }
}
