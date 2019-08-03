import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

/*    constructor(props) {
        super(props)
    }*/

    render() {
        return (
            <div className='add-item'>
                <button className='btn btn-outline-secondary'
                        onClick={() => this.props.onAddItem('hello World')}>Add Item
                </button>
            </div>
        )
    }
}
