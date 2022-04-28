
class todoApi {
    todos = [
        {
            id: 1,
            status: 3,
            name: 'Học JS',
        },
        {
            id: 2,
            status: 1,
            name: 'Học React',
        },
        {
            id: 3,
            status: 2,
            name: 'Học Redux saga',
        },
        {
            id: 4,
            status: 2,
            name: 'Học php',
        },
        {
            id: 5,
            status: 2,
            name: 'Học Laravel',
        },
        {
            id: 6,
            status: 2,
            name: 'Học Laravel',
        },
    ];
    GET(id = false) {
        // trả về toàn bộ list
        if (!id) {
            return this.todos;
        }
        // trả về todo theo id
        return this.todos.find((t) => t.id === id);
    }
    SAVE(todo) {
        if (todo.id === undefined) {
            const ids = this.todos.map((todo) => {
                return todo.id;
            })

            const lastestId = Math.max(...ids);

            todo = {
                ...todo,
                id: lastestId + 1,
            }
            this.todos.push(todo);
            return todo;
        }
        else {
            this.todos = this.todos.map((oldTodo) =>
                oldTodo.id === todo.id ? todo : oldTodo
            );
            return todo;
        }
    }
    DELETE(id){
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }
}

export default new todoApi();