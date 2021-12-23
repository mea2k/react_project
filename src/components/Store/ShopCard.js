import PropTypes from 'prop-types'


const ShopCard = ({ item }) => (
    <div className="store-card">
        <div className="store-card-image">
            <img className="store-card-image" src={item.img} alt={item.name} />
        </div>
        <div className="store-card-content-layer">
            <span className="store-card-title">
                {item.name}
            </span>
            <p className="store-card-info">{item.color}</p>
        </div>
        <div className="store-card-footer">
            {item.price}&nbsp;{item.priceCur}
        </div>
    </div>
);


ShopCard.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number,
        priceCur: PropTypes.string,
        color: PropTypes.string,
        img: PropTypes.string,
    }).isRequired
};





export default ShopCard;