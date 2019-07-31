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

    onLabelClick = () => { // правильный подход
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        });
    };

    onLabelDoubleClick() { // не правильный подход
        console.log(`Done ${this.props.label}`);
    }

    render() {
        const {done, important} = this.state;
        const {label, onDeleted} = this.props;
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
     onClick={this.onLabelClick} // правильный подход
     onMouseLeave={this.MouseLeave} // консервативный подход
     onDoubleClick={this.onLabelDoubleClick.bind(this)} // не правильный подход
 >

                {label}
              </span>
                <button type="button" className="btn btn-outline-success btn-sm float-right"
                        onClick={this.onMarkImportant}>
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
