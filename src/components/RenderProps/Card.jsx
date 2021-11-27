import React, { useState } from "react";
import Mouse from "./Mouse";

const style = {
    height: '150px',
    border: '2px solid black',
    margin: '10px',
    color: 'darkorange'
}


const Card = (props) => {
    return (
        <Mouse render={({ x, y }) => {
            return <div style={style}>
                {JSON.stringify({ x, y }, null, 2)}
            </div>
        }} />
    );
};

export default Card;


