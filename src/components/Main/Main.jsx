import React from 'react';
import classes from "./Main.module.css";
import Counter from "../Counter/Counter";
import { Route, Routes } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import Users from "../Users/Users";

const Main = () => {
    return (
        <div className={classes.mainWrapper}>
            <Routes>
                <Route path={'/'} element={<StartPage />} />
                <Route path={'/counter'} element={<Counter />} />
                <Route path={'/users'} element={<Users />} />
            </Routes>
        </div>
    );
};

export default Main;