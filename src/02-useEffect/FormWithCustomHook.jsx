import { useEffect, useState } from "react";
import Message from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulatio con Custom Hook</h1>
            <hr />

            {/* Username */}
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange } />

            {/* EMail */}
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="rohatiro@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange } />
            
            {/* Password */}
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange } />

                <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        </>
    );
};