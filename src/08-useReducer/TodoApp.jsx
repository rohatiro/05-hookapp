import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Ir al trabajo',
        done: false
    },
    {
        id: new Date().getTime() + 1000,
        description: 'llegar al trabajo',
        done: false,
    }
];

export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState);

    // TODO componentes
    // 1 - TODO List
    // 2 - TODO Item
    // 3 - TODO Add

    const handleAddTodo = (newTodo) => {
        dispatchTodo({
            type: 'add',
            payload: newTodo
        })
    };

    return (
        <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } />
            </div>

            <div className="col-5">
                <TodoAdd addTodo={ handleAddTodo }/>
            </div>
        </div>

        </>
    )
}
