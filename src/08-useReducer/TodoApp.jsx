import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {

    const { todos, handleAddTodo, handleRemoveTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo();

    return (
        <>
        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos={ todos } removeTodo={ handleRemoveTodo } onToggleTodo={ handleToggleTodo } />
            </div>

            <div className="col-5">
                <TodoAdd addTodo={ handleAddTodo } />
            </div>
        </div>

        </>
    )
}
