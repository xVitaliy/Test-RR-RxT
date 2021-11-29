import React from 'react';
import classes from "./Main.module.css";
import Counter from "../Counter/Counter";
import { Route, Routes } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import Users from "../Users/Users";
import Todos from "../Todos/Todos";
import RenderProps from "../RenderProps/RenderProps";
import Test from "../Test/Test";
import TodosToolkit from "../TodosReduxToolkit/TodosToolkit";

const Main = () => {
    return (
        <div className={classes.mainWrapper}>
            <Routes>
                <Route path={'/'} element={<StartPage />} />
                <Route path={'/counter'} element={<Counter />} />
                <Route path={'/users'} element={<Users />} />
                <Route path={'/todos'} element={<Todos />} />
                <Route path={'/todos-redux'} element={<TodosToolkit />} />
                <Route path={'/render-props'} element={<RenderProps />} />
                <Route path={'/test'} element={<Test />} />
            </Routes>
        </div>
    );
};

export default Main;