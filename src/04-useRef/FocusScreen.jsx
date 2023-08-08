import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = (e) => {
        // console.log(inputRef.current);
        inputRef.current.select();
    };

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder='Ingrese su nombre'
                ref={ inputRef} />
            <button 
                className="btn btn-primary mt-2"
                onClick={ onClick} >Set Focus</button>
        </>
    )
}
