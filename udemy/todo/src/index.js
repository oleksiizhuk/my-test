import React from 'react';
import ReactDom from 'react-dom';

const el = (
    <div>
        <h1>My todo List</h1>
        <input type="text" placeholder='search'/>
        <ul>
            <li>Learn React</li>
            <li>Build Awesome app</li>
        </ul>
    </div>
);

ReactDom.render(el, document.getElementById('root'));