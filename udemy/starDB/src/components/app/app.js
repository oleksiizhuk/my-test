import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from "../error-button";
import ErrorIndicator from '../error-indicator'
import ToggleRandomPlanet from '../toggle-random-planet';
import PeoplePage from '../people-page';

import './app.css'
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiServise from "../../services/swapi-service";

export default class app extends Component {
    swapiService = new SwapiServise();

    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            hasError: false,
            selectedItem: null
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch");
        this.setState({hasError: true})
    }

    toggleRandomPlanet = () => {
        const {showRandomPlanet} = this.state;
        this.setState(
            {showRandomPlanet: !showRandomPlanet}
        );
    };

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const {selectedPerson, hasError, showRandomPlanet} = this.state;
        if (hasError) {
            return (
                <ErrorIndicator/>
            );
        }
        const randomPlanet = showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div>
                <Header/>
                {randomPlanet}
                <ToggleRandomPlanet
                    onToggleRandomPlanet={this.toggleRandomPlanet}/>
                <ErrorButton/>

                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelect={this.onPersonSelected}
                            onGetData={this.swapiService.getAllPlanets}
                            renderItem={(item) => (
                                <span>{item.name}
                                    <button>!</button></span>)}/>
                    </div>

                    <div className="col-md-6">
                        <PersonDetails
                            personId={selectedPerson}
                        />
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelect={this.onPersonSelected}
                            onGetData={this.swapiService.getAllStarShips}
                            renderItem={(item) => item.name}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails
                            personId={selectedPerson}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
