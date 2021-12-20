import PropTypes from 'prop-types'


const ShopItemFunc = ({
    brand,          // название производителя товара,
    title,          // название товара,
    description,    // краткое описание товара,
    descriptionFull,// подробное описание товара,
    price,          // цена товара,
    currency        // валюта товара.
}) => {
    return (
        <div className="main-content">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <h3>{description} </h3>
            <div className="description">
                {descriptionFull}
            </div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">
                    <span>{currency}</span>
                    <b>{price}</b>
            </div>
                <button>Добавить в корзину</button>
            </div>
        </div>


    )
};



ShopItemFunc.propTypes = {
    brand: PropTypes.string,            // название производителя товара,
    title: PropTypes.string.isRequired, // название товара,
    description: PropTypes.string,      // краткое описание товара,
    descriptionFull: PropTypes.string,  // подробное описание товара,
    price: PropTypes.number.isRequired, // цена товара,
    currency: PropTypes.string          // валюта товара.
};

ShopItemFunc.defaultProps = {
    brand: '',
    title: '',
    description: '',
    descriptionFull: '',
    price: 0,
    currency: 'р'
};


export default ShopItemFunc;
