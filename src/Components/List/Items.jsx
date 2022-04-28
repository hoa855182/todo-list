import status from '../../Constants/status';
import React, { Component } from 'react';


class Items extends Component {
    constructor(props) {
        super(props);
    }

    state = {  
        
    }
    render() { 
        const { todo } = this.props;
        return (
            <li className='todo-item'>
                <div className='todo-content'>{todo.name}</div>
                
                <div className='todo-action'>
                    <button 
                        className='todo-edit'
                        onClick={(e) => {
                            this.props.handlePrepareEdit(todo);
                        }}
                        >Edit
                    </button>
                    <button
                        className='todo-delete'
                        onClick={(e) => {
                            this.props.handleDelete(todo.id);
                        }}
                    >Delete
                    </button>
                </div>
                <div
                    className={`status-context-cover ${this.state.visibility}`}
                    onClick={() => {
                        this.handleCloseContextMenu();
                    }}
                ></div>
               
            </li>
        );
    }
}
 
export default Items;