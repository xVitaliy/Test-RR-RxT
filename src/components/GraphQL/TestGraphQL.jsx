import React from 'react';
import { useLazyQuery, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { addRockets } from "../../redux/SpaseX_Rocets_gql";
import RocketsCard from "../RocketsCard/RocketsCard";
import logo from '../../img/Rockets/Falcon 1.jpeg'
import classes from "../RocketsCard/RocketsCard.module.css";
import { GET_ROCKETS_NAMES } from "../../graphql/queries";

// SCHEMA вынести в отдельный файд
// const GET_ROCKETS_NAMES = gql(`{
//     rockets($limit:Int) {
//         id
//         name
//         description
//     }
// }`);


const TestGraphQl = () => {
    const dispatch = useDispatch()
    const response = useSelector(state => state.SpaceXRockets.rockets)

    // useLazyQuery()
    // query функция для отправки запроса за данными
    // const [query, { loading, error, data }] = useLazyQuery(GET_ROCKETS_NAMES);
    const { loading, error, data } = useQuery(GET_ROCKETS_NAMES);

    // const {
    //     loading: newLoading,
    //     error: newError,
    //     data: newData
    // } = useQuery(GET_ROCKETS_NAMES, { variables: { breed } });

    //ВАЖНО
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    dispatch(addRockets({ data }))

    // const content = response.map(({ id, name, description }) => <div key={id}><p>id: {id},
    //     name: {name} description:{description}</p></div>)

    const content = response?.map((data) => <RocketsCard key={data.id} {...data} />)

    return (
        <div>
            {/*<button onClick={() => query()}>receive</button>*/}
            <div className={classes.image}>
                <picture>
                    <img src={logo} alt="#" />
                </picture>
            </div>
            {content}

        </div>
    )
}

export default TestGraphQl;