import React from 'react';

const Meal = ({ meal }) => {
    const { idMeal, strMealThumb, strMeal, strInstructions } = meal;
    return (
        <div className='border-2 rounded-lg p-5'>
            <img className='rounded-lg' src={strMealThumb} alt={strMealThumb} />
            <h2 className='text-2xl mt-5 mb-2'>{strMeal}</h2>
            <p>{strInstructions.slice(0, 100)}</p>
        </div>
    );
};

export default Meal;