import React from 'react';
import HomePageContext from '../../context/homePage'

const Test = () => (
    <HomePageContext.Consumer>
        {data => (
            <p>{data.message}</p>
        )}
    </HomePageContext.Consumer>
);

export default Test