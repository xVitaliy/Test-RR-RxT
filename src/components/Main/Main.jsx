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
import TodosAsync from "../TodosAsync/TodosAsync";
import TestGraphQl from "../GraphQL/TestGraphQL";
import Test2Gql from "../Test-2-gql/Test2Gql";
import FormikTest from "../Formik/FormikTest";

const Main = () => {
    return (
        <div className={classes.mainWrapper}>
            <Routes>
                <Route path={'/'} element={<StartPage />} />
                <Route path={'/counter'} element={<Counter />} />
                <Route path={'/users'} element={<Users />} />
                <Route path={'/todos'} element={<Todos />} />
                <Route path={'/todos-redux'} element={<TodosToolkit />} />
                <Route path={'/todos-redux-async'} element={<TodosAsync />} />
                <Route path={'/render-props'} element={<RenderProps />} />
                <Route path={'/test'} element={<Test />} />
                <Route path={'/test-graph'} element={<TestGraphQl />} />
                <Route path={'/test-2-graph'} element={<Test2Gql />} />
                <Route path={'/formik'} element={<FormikTest />} />
            </Routes>
        </div>
    );
};

export default Main;