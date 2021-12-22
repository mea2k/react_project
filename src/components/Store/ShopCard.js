import PropTypes from 'prop-types'

const ShopCard = ({ item }) => (
    <div className="card">
        <div className="card-image">
            <img className="activator" src={item.img} alt={item.name} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
                {item.name}
            </span>
        </div>
    </div>
);


ShopCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        color: PropTypes.string,
        img: PropTypes.string
    }).isRequired
};





export default ShopCard;