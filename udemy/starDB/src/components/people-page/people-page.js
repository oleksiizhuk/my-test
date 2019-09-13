import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiServise from "../../services/swapi-service";

const Row = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {left}
            </div>
            <div className="col-md-6">
                {right}
            </div>
        </div>
    )
};
export default class PeoplePage extends Component {
    swapiServise = new SwapiServise();

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 3,
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const {selectedPerson, hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator/>
        }
        const itemList = (<ItemList
            onItemSelect={this.onPersonSelected}
            onGetData={this.swapiServise.getAllPeople}
            renderItem={(item) => `${item.name} (${item.gender}), (${item.birthYear})`}
        />);
        const personDetails = (
            <PersonDetails
            personId={selectedPerson}
            >
                {"testasdasd"}
            </PersonDetails>);

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
}
