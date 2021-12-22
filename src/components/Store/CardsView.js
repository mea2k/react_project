import PropTypes from 'prop-types'
import ShopCard from './ShopCard';

const CardsView = ({ cards  }) => (
    <div className="container">
        {cards && cards.map((v, key) => (
            <ShopCard item={v} key={`sc_${key}`} />
            ))}
   </div>
);


CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}



export default CardsView;