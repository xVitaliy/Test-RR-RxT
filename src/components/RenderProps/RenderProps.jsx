import React from 'react';
import Card from "./Card";

const RenderProps = () => {
    let res = React.Children.only(<Card />)
    console.log(res)
    return (
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    )
};

export default RenderProps;


