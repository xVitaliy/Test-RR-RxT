import React from 'react';
import classes from "./RocketsCard.module.css";

const RocketsCard = ({ name, description }) => {
    return (
        <div className={classes.main}>
            <h2>{name}</h2>
            <p>{description}</p>

        </div>
    );
};

export default RocketsCard;