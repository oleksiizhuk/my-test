import React, {Component} from 'react';
import './add-item.css';

export default class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const {onAddItem} = this.props;
        onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className='item-add-form d-flex'
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className='form-control'
                       placeholder='What needs to be done'
                       onChange={this.onLabelChange}
                       value={this.state.label}/>
                <button className='btn btn-outline-secondary'
                >Add
                </button>
            </form>
        )
    }
}
