import React, {Component} from 'react';
import './itemDetails.css'
import ErrorButton from "../error-button";

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
        const {name, gender, birthYear, eyeColor} = this.state.item;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={image}
                     alt='character'
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}
