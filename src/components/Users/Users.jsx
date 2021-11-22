import React from 'react';
import { useDispatch, useSelector, } from "react-redux";
import { fetchUsers, removeUsers } from "../../redux/usersSlice";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users)

    return (
        <div>
            <button onClick={() => dispatch(fetchUsers())}>get users</button>
            <button onClick={() => dispatch(removeUsers())}>Clear</button>
            <div>
                Users: <pre>{JSON.stringify(users, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Users;