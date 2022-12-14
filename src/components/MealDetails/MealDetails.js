import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData().meals[0];
    console.log(meal)
    const { strMealThumb, strMeal, strInstructions, strArea } = meal;
    return (
        <div className='flex justify-center mt-10 p-5'>
            <div>
                <img className='rounded-lg w-full h-80' src={strMealThumb} alt={strMealThumb} />
                <h2 className='text-4xl mt-5 mb-2'>{strMeal}</h2>
                <h2 className='text-xl mt-5 mb-2'>Area: {strArea}</h2>
                <p>{strInstructions.slice(0, 100)}</p>
            </div>
        </div>
    );
};

export default MealDetails;