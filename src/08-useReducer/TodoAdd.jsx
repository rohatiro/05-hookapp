import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ addTodo }) => { 
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(description.length < 1) return;
        
        const todo = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        addTodo(todo);

        onResetForm();
    };
    
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange } />
                <button
                    className="btn btn-primary mt-2"
                    type="submit" >Agregar</button>
            </form>
        </>
    )
}
