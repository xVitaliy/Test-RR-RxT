import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/todosAsyncSlice";

const InputFieldAsync = () => {
    const [text, setText] = useState('');

    const dispatch = useDispatch();
    const handle = () => {
        dispatch(addNewTodo(text))
        setText(prevState => prevState = '')
    }

    return (
        <div>
            <span>
                <input value={text}
                       onChange={event => setText(event.target.value)}
                       type="text" />
            </span>
            <span><button onClick={handle}>addTodo</button></span>
        </div>
    );
};

export default InputFieldAsync;