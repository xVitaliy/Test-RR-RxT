import React, { useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_USER, INSERT_USER } from "../../graphql/queries";

const styles = {
    marginTop: '10px',
    padding: '20px',
    width: '25%',
    border: '2px solid white'
}

const Test2Gql = () => {
    const [name, setName] = useState('');
    const [rocket, setRocket] = useState('');
    const [insertUser, { loading, error, data }] = useMutation(INSERT_USER)
    const { loading: load, error: err, data: dataUs, refetch } = useQuery(GET_USER)

    if (load || loading) return <p>Loading...</p>
    if (err || error) return <p>Error</p>

    const addUser = async () => {
        await insertUser({
            variables: {
                name: name,
                rocket: rocket
            }
        })
        await refetch()
        setName('')
        setRocket('')
    }

    // const response = data?.insert_users.returning.map(({ name, rocket, id }) =>
    //     <div key={id}><p>My name: {name} </p>
    //         <p>Rocket: {rocket}</p></div>)

    const users = dataUs.users.map(({ id, name, rocket, timestamp }) => <div style={styles}
                                                                             key={id}>
        <p>{name}</p>
        <p>{rocket}</p>
        <p>{timestamp}</p>
    </div>)


    return (
        <div>
            <div>
                <input type="text" placeholder={'name'} value={name} onChange={event => setName(event.target.value)} />
            </div>
            <div>
                <input type="text" placeholder={'rocket'} value={rocket}
                       onChange={event => setRocket(event.target.value)} />
            </div>
            <div>
                <button onClick={addUser}>insert</button>
            </div>
            <div>
                {users}
            </div>
            {/*<div>*/}
            {/*    {response}*/}
            {/*</div>*/}
        </div>
    );
};

export default Test2Gql;