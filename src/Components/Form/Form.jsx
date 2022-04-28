import { React, Component } from 'react';
import todoApi from '../../apis/todoApi';
import '../Form/form.scss'
import App from '../../App';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSaveTodo = this.handleSaveTodo.bind(this);
    }
    state = {
        id: undefined,
        status: 1,
        name: '',
    };

    handleChange(e) {
        this.setState({
            ...this.state,
            name: e.target.value,
        })
    }

    handleSaveTodo(todo) {
        let oldTodo = this.state.todo;
        todo = { ...this.initTodo };

        if (oldTodo.id === undefined) {
            todo = { ...this.initTodo };
        }
        else if (oldTodo.status !== todo.status) {
            todo = { ...this.initTodo }
        }
        this.renderData(todo);
    }

    handleChangeFormToSave() {
        this.setState({
            id: undefined,
            status: 1,
            name: '',

        });
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevProps.check !== this.props.check) {
            this.setState({
                ...this.state,
                id: this.props.todo.id,
                name: this.props.todo.name,
                status: this.props.todo.status,
            });
        }
    }
    render() {
        return (
            <div className='todo-form'>
                {this.state.id && (
                    <button
                        className='edit-tag'
                        onClick={() => this.handleChangeFormtoSave()}
                    >
                        EDIT: {this.props.todo.name}
                    </button>
                )}
                
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.handleSaveTodo(this.state);
                }}>
                    <input
                        type='text'
                        value={this.state.name}
                        placeholder=' '
                        name='name'
                        onChange={(e) => {
                            this.handleChange(e);
                        }}
                    />
                    <button
                        className='todo-save'
                        placeholder='Input todo'
                        type='submit'
                    >
                        SAVE
                    </button>

                </form>
            </div>
        );
    }
}
export default Form;
