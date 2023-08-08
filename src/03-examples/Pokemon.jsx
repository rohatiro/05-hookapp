import { useLayoutEffect, useRef, useState } from "react"

export const Pokemon = ({ name, sprites }) => {
    const nameRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = nameRef.current.getBoundingClientRect();
        setBoxSize({ width, height })
    }, []);

    return (
        <>
            <div className="d-flex">
                <h2 ref={nameRef}>{name}</h2>
                <img src={sprites?.front_default} alt={name} />
            </div>
            <pre>
                { JSON.stringify(boxSize) }
            </pre>
        </>
    )
}
