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
                <div
                    className={`todo-status ${status.getClass(
                        todo.status
                    )}`}
                    onClick={(e) => {
                        this.props.handleShowContextMenu(e, todo);
                    }}
                >
                    {status.getDisplayName(todo.status)}

                   
                </div>
                <div className='todo-action'>
                    <button 
                        className='todo-edit'
                        onClick={() => {
                            this.props.handlePrepareEdit(todo);
                        }}
                        >Edit
                    </button>
                    <button
                        className='todo-delete'
                        onClick={() => {
                            this.props.handleDelete(todo.id);
                        }}
                    >Delete
                    </button>
                </div>
                
            </li>
            
        );
    }
}
 
export default Items;