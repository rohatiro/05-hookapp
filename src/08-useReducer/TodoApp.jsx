import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

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

    return (
        <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    {
                        todos.map( todo => (
                            <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                <span className="align-self-center">Item 1</span>
                                <button className="btn btn-danger">Borrar</button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form>
                    <input
                        type="text"
                        placeholder="Que hay que hacer?"
                        className="form-control" />
                    <button
                        className="btn btn-primary mt-2"
                        type="submit" >Agregar</button>
                </form>
            </div>
        </div>

        </>
    )
}
