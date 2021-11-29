import React, { useEffect, useState } from 'react';

// import classes from "./Test.module.css";
let styles = {
    border: '1px solid orangered',
    height: '100px',
    margin: '10px'
}

function Test(props) {
    return (
        <>
            <Result />
            <Result />
            <Result />
            <Result />
        </>
    );
}

export default Test;

function Card({ x, y, handleMouse }) {

    return (
        <div style={styles} onMouseMove={handleMouse}>
            {x} : {y}
        </div>
    )
}

function HighOrderComponent(Component) {
    const Wrapper = (props) => {
        const [x, setX] = useState(0)
        const [y, setY] = useState(0)
        const handleMouse = (e) => {
            setX(e.clientX)
            setY(e.clientY)
        }
        // useEffect(() => {
        //     window.addEventListener('mousemove', handleMouse);
        //     return () => window.removeEventListener('mousemove', handleMouse)
        // }, [])
        return <Component {...props} x={x} y={y} handleMouse={handleMouse} />
    }
    return Wrapper
}

let Result = HighOrderComponent(Card)
