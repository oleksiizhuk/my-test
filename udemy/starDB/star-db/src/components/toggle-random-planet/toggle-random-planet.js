import React from 'react';

import './toggle-random-planet.css';

const toggleRandomPlanet = (props) => {
    const {onToggleRandomPlanet} = props;
    return (
        <button
            onClick={onToggleRandomPlanet}
            className='btn btn-success'>
            toggle random planet
        </button>
    )
};

export default toggleRandomPlanet;
