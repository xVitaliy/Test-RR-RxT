import React from 'react';
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <aside className={classes.navbarWrapper}>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/counter'> Counter</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/users'>Users</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/todos'>Todos (not Redux)</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/todos-redux'>Todos (Redux toolkit)</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/todos-redux-async'>Todos (Async_Redux)</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive} to='/render-props'>Render
                    props</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/test'>Test</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/test-graph'>Test_GraphQL</NavLink>
            </div>
            <div className='item'>
                <NavLink className={({ isActive }) => isActive ? classes.active : classes.notActive}
                         to='/test-2-graph'>Test_2_GraphQL</NavLink>
            </div>
        </aside>
    );
};

export default Navbar;