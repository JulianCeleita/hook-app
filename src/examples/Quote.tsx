import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ quote, author }:any) => {

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0})      // Tomo el ancho y alto del cuadrado le pongo valor de inicio 0

    const pRef = useRef();

    useLayoutEffect(() => {
        const { width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height })

    }, []);

    return (
        <>
            <blockquote 
            className="blockquote text-end"
            style={{ display: 'flex' }}
            >
                <p ref={ pRef } className="mb-1"> { quote } </p>
                <hr />
                <footer className="blockquote-footer"> {author} </footer>
            </blockquote>
        
            <code> { JSON.stringify(boxSize) } </code>

        </>
    )
}
