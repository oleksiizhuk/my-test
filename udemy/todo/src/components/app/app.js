import React, {Component} from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-Item';

import './app.css';

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            //todoData.splice(idx, 1); эта строка зло, нельзя менять текущий state его нужно скопировать и переприсвоить
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [...before, ...after];
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {
        const newItem = {label: text, important: false, id: this.maxId++};

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }
        });
    };

    toggleImportant = (id) => {
        console.log('toggle important', id);
    };

    toggleDone = (id) => {
        console.log('togGle done', id);
    };

    render() {
        return (
            <div className='todo-app'>
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.toggleImportant}
                    onToggleDone={this.toggleDone}
                />
                <AddItem
                    onAddItem={this.addItem}
                />
            </div>
        );
    }


};

