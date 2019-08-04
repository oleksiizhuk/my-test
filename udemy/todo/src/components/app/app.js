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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }
        });
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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    };

    toggleDone = (id) => { // правильный подоход обновления state
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    toggleImportant = (id) => {// не правильный подоход обновления state
        this.setState(({todoData}) => {
            const newArr = todoData.map((item) => {
                if (item.id === id) {
                    item.important = !item.important;
                    return item;
                }
                return item;
            });
            return {
                todoData: newArr
            };
        });
    };


    render() {
        const {todoData} = this.state;
        let doneCount = todoData
            .filter((el) => el.done === true).length;

        const todoCount = todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoData}
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

