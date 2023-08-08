const initialState = [{
    id: 1,
    todo: 'llegar al trabajo',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) => {
    if(action.type === '[TODO] add todo') {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

const newTodos = {
    id: 2,
    todo: 'preparar mi espacio',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodos,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos)