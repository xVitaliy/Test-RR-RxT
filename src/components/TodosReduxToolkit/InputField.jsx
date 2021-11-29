import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodos, setText } from "../../redux/todosSlice";

const InputField = () => {
    const dispatch = useDispatch();
    const text = useSelector(state => state.todosItem.newMessage)


    return (
        <div>
            <span><input type="text" value={text} onChange={(e) => dispatch(setText(e.target.value))} /></span>
            <span><button onClick={() => dispatch(addTodos())}>addTodo</button></span>
        </div>
    );
};

export default InputField;