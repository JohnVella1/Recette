import PropTypes from 'prop-types';

const Ingredient = ({unit, quantity, name}) => (
    <li className="ingredient">
        <span className="ingredient-quantity">{quantity} {unit}</span>
        {name}
    </li>
);

Ingredient.propTypes = {
    unit: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRrquired,
};

export default Ingredient;