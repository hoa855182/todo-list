import React, { Component } from 'react';
import '../List/list.scss'

import Items from './Items';

class List extends Component {
    constructor(props) {
        super(props);
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

    

    async handleSaveStatusTodo(status) {
        await this.setState({
            ...this.state,
            visibility: 'visible',
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
        return (
           <React.Fragment>
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
                <ul>
                    {todos.map((todo, key) => {
                        return (
                            <Items
                                todo={todo}
                                key={key}
                                handlePrepareEdit={this.props.handlePrepareEdit}
                                handleShowContextMenu={this.handleShowContextMenu}
                                handleDelete={this.props.handleDelete}
                            />);
                    })}
                </ul>
                
           </React.Fragment>
        );
    }
}
 
export default List;