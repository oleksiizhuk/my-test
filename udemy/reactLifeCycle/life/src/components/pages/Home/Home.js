import React, {Component} from 'react';
import HomeView from './HomeView';
import PropTypes from 'prop-types';

export default class Home extends Component {

    constructor(props) {
        super(props);
        console.log("constructor")
    }

    getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    render() {
        console.log('render');
        return (
            <HomeView/>
        )
    }
}
