import PropTypes from 'prop-types'

const ShopItem = ({ item }) => (
    <li className="card-list-item">
        <div className="card-list-item-image">
            <img className="card-list-item-image" src={item.img} alt={item.name} />
        </div>
        <div className="card-list-item-title">
            {item.name}
        </div>
        <div className="card-list-item-content">
            {item.color}
        </div>
        <div className="card-list-item-price">
            {item.price}&nbsp;{item.priceCur}
        </div>
    </li>
);


ShopItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        color: PropTypes.string,
        img: PropTypes.string
    }).isRequired
};





export default ShopItem;