import React, {Component} from 'react';
import './item-list.css';
import Spinner from '../spiner';

export default class itemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: null
        };
    }

    componentDidMount() {
        const {onGetData} = this.props;
        onGetData()
            .then((itemList) => {
                this.setState({itemList})
            });
    };

    renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li className='list-group-item'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    };

    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Spinner/>
        }
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
