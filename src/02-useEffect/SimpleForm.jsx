import { useEffect, useState } from "react";
import Message from "./Message";

export const SimpleForm = () => {
    const [ formState, setFormState] = useState({
        username: 'rohatiro',
        email: 'roberto.tienda@perficient.com'
    });

    const { username, email } = formState;

    const onInputChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    useEffect(() => {
        // console.log('useEffect Called');
    }, [ ]);

    useEffect(() => {
        // console.log('formState changed');
    }, [ formState ]);
    
    useEffect(() => {
        // console.log('email changed');
    }, [ email ]);

    return (
        <>
            <h1>Formulatio Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange } />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="rohatiro@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange } />

            { username === 'rohatiro1' && <Message />}
        </>
    );
};