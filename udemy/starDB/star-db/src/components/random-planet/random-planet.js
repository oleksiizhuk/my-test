import React, {Component, Fragment} from 'react';
import Spiner from '../spiner';
import './random-planet.css';
import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-service';

export default class randomPlanet extends Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 19 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const {planet, loading, error} = this.state;

        const errorMessage = error ? <ErrorIndicator/> : null;

        const spinner = loading ? <Spiner/> : null;

        const hasData = !(loading || error);
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    const {
        id, name, population, rotationPeriod, diameter,
    } = planet;
    return (
        <Fragment>
            <img className="planet-image" alt='planets'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
};