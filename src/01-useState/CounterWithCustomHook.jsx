import React from 'react'
import { useCounter } from '../hooks/useCounter';

export default function CounterWithCustomHook() {
    const { counter, increment, decrement, reset } = useCounter(5);
    return (
        <>
            <h1>CounterWithCustomHook: { counter }</h1>

            <hr />

            <button className="btn btn-primary" onClick={ () => increment(5) }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(5) }>-1</button>
        </>
    )
}
