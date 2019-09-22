import React, {Component} from 'react';
import './item-details.css'
import SwapiServise from "../../services/swapi-service";
import ErrorButton from "../error-button";

export default class itemDetails extends Component {

    swapeService = new SwapiServise();

    constructor(props) {
        super(props);
        this.state = {
            person: null,
            personId: null
        }
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.swapeService.getPerson(personId)
            .then((person) => {
                this.setState({person});
            })
    }

    render() {
        if (!this.state.person) {
            return <span>Select a person from a list</span>
        }
        const test = this.props.children;
        console.log(test);
        const {id, name, gender, birthYear, eyeColor} = this.state.person;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
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