import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counterSlice";
import ArrowBack from "../additional_components/ArrowBack";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)
    return (
        <div>
            <ArrowBack />
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