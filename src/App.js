import { Component, React } from 'react';
import './App.scss';

import Form from './Components/Form/Form';
import List from './Components/List/List';
import todoApi from './apis/todoApi';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSaveTodo = this.handleSaveTodo.bind(this);
    this.handlePrepareEdit = this.handlePrepareEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    
  }

  initTodo = { 
    id: undefined, 
    name: '', 
    status: undefined 
  };
  
  state = {
    todos: [this.initTodo],
    todo: this.initTodo,
    
  };

  renderData() {
    const response = todoApi.GET();
    this.setState({
      ...this.state,
      todos: response,
    });
  }

  componentDidMount() {
    this.renderData();
  }


  //----------------------save----------------------------//

  handleSaveTodo(todo){
    // let oldTodo = this.state.todo;

    todoApi.SAVE({ ...todo, status: todo.status ?? 1 });
    
    // if (oldTodo.id === undefined) {
    //   todo = { ...this.initTodo };
    // } else if (oldTodo.status !== todo.status) {
    //   todo = { ...this.initTodo };
    // }
    // console.log(todo)
    // localStorage.setItem('jobs', todo)
     

    
    
    this.renderData();
  }
 
  //----------------------Edit----------------------------//

  handlePrepareEdit(todo){
    this.setState({
      ...this.state,
      todo: todo,
    })
    // this.renderData();
    
  }

  //----------------------Delete----------------------------//

  handleDelete(id) {
    todoApi.DELETE(id);
    this.renderData();
  }



  render() {
 
    return (
      <div className='App'>
        <div className='title'>
          Todo <strong>list</strong>
        </div>
        <div className='todo-list'>
          <Form 
            todo = {this.state.todo} 
            handleSaveTodo={this.handleSaveTodo}
            check = {Math.random()} 
          />

          <List 
            todos={this.state.todos} 
            handlePrepareEdit={this.handlePrepareEdit}
            handleSaveTodo={this.handleSaveTodo}
            handleDelete={this.handleDelete}  
          />
        </div>
      </div>
    );
    
  }
  
}

export default App;
