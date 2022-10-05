import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Restaurant = () => {
    const meals = useLoaderData()
    console.log(meals.meals)
    return (
        <div>
            <h2 className='text-3xl text-center mt-5'>Welcome to the Restaurant</h2>
        </div>
    );
};

export default Restaurant;