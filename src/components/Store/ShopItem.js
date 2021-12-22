import PropTypes from 'prop-types'

const ShopItem = ({ item }) => (
    <li>
        <div className="card-image">
            <img className="activator" src={item.img} alt={item.name} />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
                {item.name}
            </span>
        </div>
    </li>
);


ShopItem.propTypes = {
    name: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        color: PropTypes.string,
        img: PropTypes.string
    }).isRequired
};





export default ShopItem;