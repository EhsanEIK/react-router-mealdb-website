import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const allMeal = useLoaderData().meals;

    return (
        <div className='container mx-auto mb-10'>
            <h2 className='text-3xl text-center mt-5 mb-10'>Welcome to the Restaurant</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    allMeal.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;