import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { idMeal, strMealThumb, strMeal, strInstructions } = meal;
    return (
        <div className='border-2 rounded-lg p-5'>
            <img className='rounded-lg' src={strMealThumb} alt={strMealThumb} />
            <h2 className='text-2xl mt-5 mb-2'>{strMeal}</h2>
            <p className='mb-10'>{strInstructions.slice(0, 100)}</p>
            <Link className='bg-blue-600 text-white mr-5 px-4 py-1 hover:bg-blue-700
                ' to={`/restaurant/food-${idMeal}`}>see more</Link>
            <Link to={`/restaurant/food-${idMeal}`}>
                <button className='bg-blue-600 text-white px-4 py-1 hover:bg-blue-700
                '>see more btn</button>
            </Link>
        </div>
    );
};

export default Meal;