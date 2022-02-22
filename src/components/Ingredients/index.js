import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient';
import './style.scss';

const Ingredients = ({ ingredients }) => (
    <div className="ingredients">
        <ul>
            {
                ingredients.map((ingrObj) => (
                    <Ingredient
                    key={ingrObj.id}
                    {...ingrObj}
                    />
                ))
            }
        </ul>
    </div>
);

Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            unit: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired
};

export default Ingredients;