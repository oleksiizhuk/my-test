/*
import React, {Component} from 'react';
import ItemList from "../item-list/item-list";
import PersonDetails from "../itemDetails/itemDetails";
import ErrorIndicator from "../error-indicator";
import SwapiServise from "../../services/swapi-service";
import Row from "../Row/Row";
import './people-page.css';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class PeoplePage extends Component {
    swapiServise = new SwapiServise();

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 3,
        }
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
        const itemList =
            <ItemList
                onItemSelected={this.onPersonSelected}
               getData={this.swapiServise.getAllPeople}
                renderItem={(i) => (
                    `${i.name} ${i.birthYear}`
                )}
            >
            </ItemList>;
        const personDetails = (
            <ErrorBoundary>
                <PersonDetails
                    personId={selectedPerson}
                />
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
};
*/
