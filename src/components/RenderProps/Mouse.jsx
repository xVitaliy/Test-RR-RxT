import React, { useState } from 'react';

const Mouse = (props) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouseHandler = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div onMouseMove={mouseHandler}>
            {props.render({ x, y })}
        </div>
    );
};

export default Mouse;


// export const CardHOC = (Component) => {
//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)
//
//     const mouseHandler = (e) => {
//         setX(e.clientX)
//         setY(e.clientY)
//     }
//     return (props) => {
//         return <Component {...props} x={x} y={y} mouseHandler={mouseHandler} />
//     }
// }
