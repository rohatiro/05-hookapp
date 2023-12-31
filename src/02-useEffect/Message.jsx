import { useEffect, useState } from "react"

export default function Message() {
    const [coords, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        // console.log('Message mounted');

        // window.addEventListener('mousemove', (event) => {
        //     console.log(event.x, event.y);
        // })

        const onMouseMove = ({ x, y}) => {
            const coords = { x, y };

            // console.log(coords);
            setCoords(coords);
        };

        window.addEventListener('mousemove', onMouseMove);
        
        return () => {
            // console.log('Message unmounted');
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, [ ]);

    return (
        <>
            <h3>Usuario ya existe</h3>
            <pre>{ JSON.stringify(coords) }</pre>
        </>
    )
}
