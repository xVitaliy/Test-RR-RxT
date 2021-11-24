import React from 'react';
import { NavLink } from "react-router-dom";
import classes from "./ArrowBack.module.css";

const ArrowBack = () => {
    return (
        <div>
            <NavLink to={'/'}>
                <p className={classes.arrowBtn}> Back </p>
            </NavLink>

        </div>
    );
};
// &#8656;
// <div className={classes.arrow}>
//     &#8592;
// </div>
export default ArrowBack;