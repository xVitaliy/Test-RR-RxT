import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counterSlice";
import { NavLink } from "react-router-dom";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)
    return (
        <div>
            <div>
                <NavLink style={{ color: "yellow" }} to={'/'}>_back</NavLink>
            </div>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>
                {count}
            </div>
            <div>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
        </div>
    );
};

export default Counter;