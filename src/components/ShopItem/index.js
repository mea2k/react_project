import ShopItemClass from './ShopItemClass'
import ShopItemFunc from './ShopItemFunc'

import './main.css';

const ShopItemProps = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
}

const ShopItem = () => {
    return (
        <div>
            <h1> ShopItemClass </h1>
            <div className="container">
                <div className="background-element">
                </div>
                <div className="highlight-window">
                    <div className='highlight-overlay'></div>
                </div>
                <ShopItemClass {...ShopItemProps} />
            </div>
            <h1> ShopItemFunc </h1>
            <div className="container">
                <div className="background-element">
                </div>
                <div className="highlight-window">
                    <div className='highlight-overlay'></div>
                </div>
                <ShopItemFunc {...ShopItemProps} />
            </div>
        </div>
    )
};



export default ShopItem;