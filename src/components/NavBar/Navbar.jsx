import React from 'react';
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <aside className={classes.navbarWrapper}>
            {/*<div className={classes.linkBlock}>*/}
            <div>
                <NavLink to={'/counter'}> Counter</NavLink>
            </div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
            {/*</div>*/}
        </aside>
    );
};

export default Navbar;