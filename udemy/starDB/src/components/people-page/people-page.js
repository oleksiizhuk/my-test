import React, {Component} from 'react';

import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiServise from "../../services/swapi-service";
import ErrorButton from '../error-button';

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

class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        return this.props.children;
    }
}

export default class PeoplePage extends Component {
    swapiServise = new SwapiServise();

    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 3,
            hasError: false
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
                onGetData={this.swapiServise.getAllPeople}
                renderItem={(i) => (
                    `${i.name} ${i.birthYear}`
                )}
            >
            </ItemList>;
        const personDetails = (
            <ErrorBoundry>
                <PersonDetails
                    personId={selectedPerson}
                />
            </ErrorBoundry>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }
};
