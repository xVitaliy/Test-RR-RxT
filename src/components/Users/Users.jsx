import React from 'react';
import { useDispatch, useSelector, } from "react-redux";
import { fetchUsers, removeUsers } from "../../redux/usersSlice";
import ArrowBack from "../additional_components/ArrowBack";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)

    return (
        <div>
            <ArrowBack />
            <button onClick={() => dispatch(fetchUsers())}>get users</button>
            <button onClick={() => dispatch(removeUsers())}>Clear</button>
            <div>
                Users: <pre>{JSON.stringify(users, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Users;