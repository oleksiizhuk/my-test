import React, {Component} from 'react';
import './itemDetails.css'
import ErrorButton from "../error-button";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class itemDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            itemId: null,
            image: null
        }
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(itemId)
                });
            })
    }

    render() {
        const {item, image} = this.state;
        if (!item) {
            return <span>Select a person from a list</span>
        }
        const {name} = this.state.item;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image}
                     alt='character'
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })}
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}
