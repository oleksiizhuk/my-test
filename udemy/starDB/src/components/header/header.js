import React,{Component} from 'react';
import './header'

export default class header extends Component{


    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="/#">
                        Star DB
                    </a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <a href="/#">People</a>
                    </li>
                    <li>
                        <a href="/#">Planets</a>
                    </li>
                    <li>
                        <a href="/#">StarShips</a>
                    </li>
                </ul>
            </div>
        )
    }
}