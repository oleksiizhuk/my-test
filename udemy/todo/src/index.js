import React from 'react';
import ReactDom from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build Awesome app</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input style={searchStyle} type="text" placeholder={searchText }/>;
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));
