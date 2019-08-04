import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false,
            important: false
        };

        this.MouseLeave = () => { // консервативный подход
            console.log(`Done ${this.props.label}`);
        }
    }

    onLabelDoubleClick() { // не правильный подход
        console.log('onLabelDoubleClick');
    }

    render() {
        //const {done, important} = this.state;
        const {label, onDeleted, onToggleImportant, onToggleDone, done, important} = this.props;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
 <span
     className="todo-list-item-label"
     onClick={onToggleDone} // правильный подход
     onMouseLeave={this.MouseLeave} // консервативный подход
     onDoubleClick={this.onLabelDoubleClick.bind(this)} // не правильный подход
 >

                {label}
              </span>
                <button type="button" className="btn btn-outline-success btn-sm float-right"
                        onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
              <button type="button" className="btn btn-outline-danger btn-sm float-right"
                      onClick={onDeleted}>
                <i className="fa fa-trash-o"/>
              </button>
             </span>
        );
    }
}
