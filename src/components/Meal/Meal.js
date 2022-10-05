import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { idMeal, strMealThumb, strMeal, strInstructions } = meal;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/restaurant/food-${idMeal}`);
    }

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
            <button onClick={handleNavigate} className='bg-rose-600 text-white w-full mt-5 px-4 py-1 hover:bg-rose-700
                '>see details</button>
        </div>
    );
};

export default Meal;