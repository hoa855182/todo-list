import React, { Component } from 'react';
import '../List/list.scss'

import Items from './Items';
import status from '../../Constants/status';

class List extends Component {
    constructor(props) {
        super(props);
        this.handleShowContextMenu = this.handleShowContextMenu.bind(this)
    }
    state = { 
        top: 0,
        left: 0,
        visibility: 'hidden',
        todo: {
            id: undefined,
            status: undefined,
            name: '',
        },
    }

    handleShowContextMenu(e, todo) {
        this.setState({
            top: e.clientY,
            left: e.clientX,
            visibility: 'visible',
            todo: {
                ...this.state.todo,
                ...todo,
            },
        });
    }

    handleCloseContextMenu(todo) {
        this.setState({
            visibility: 'hidden',
            todo: {
                ...this.state.todo,
                ...todo,
            },
        })
    }

    async handleSaveStatusTodo(status) {
        await this.setState({
            ...this.state,
            
            todo: {
                ...this.state.todo,
                status: status,
            },
            
        });
        this.props.handleSaveTodo(this.state.todo);
        
    }
    

    render() { 
        const { todos } = this.props;
        console.log(this.props)
        localStorage.setItem('list', JSON.stringify({ list: this.props }));

        return (
           <React.Fragment>
                <ul>
                    {todos.map((todo, key) => {
                        return (
                            <Items
                                todo={todo}
                                key={key}
                                handlePrepareEdit={this.props.handlePrepareEdit}
                                handleShowContextMenu={
                                    this.handleShowContextMenu
                                }
                                handleDelete={this.props.handleDelete}
                            />);
                    })}
                    <div
                        className={`status-context-cover ${this.state.visibility}`}
                        onClick={() => {
                            this.handleCloseContextMenu();
                        }}
                    ></div>
                    <div
                        className={`status-context-menu ${this.state.visibility}`}
                        style={{
                            top: `${this.state.top}px`,
                            left: `${this.state.left}px`,
                            transform: `${window.innerHeight - this.state.top <= 150
                                ? 'translateY(-100%)'
                                : ''
                                }`,
                        }}
                    >
                        <button className={`todo-status todo`}
                        onClick={() => {
                            this.handleSaveStatusTodo(status.TODO);
                        }}
                        >
                            Todo
                        </button>

                        <button className={`todo-status process`}
                        onClick={() => {
                            this.handleSaveStatusTodo(status.PROCESS);
                        }}
                        >
                            Processing
                        </button>

                        <button className={`todo-status completed`}
                        onClick={() => {
                            this.handleSaveStatusTodo(status.COMPLETED);
                        }}
                        >
                            Completed
                        </button>

                    </div>
                </ul>
               
               
           </React.Fragment>
        );
    }
}
 
export default List;