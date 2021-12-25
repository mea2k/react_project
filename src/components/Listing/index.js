import Listing from './Listing';

import './main.css';

const items = require('./data.json');

const ListingLayout = () => {

    return (
        <div>
            <h1>Список предложений</h1>
            <h3>Компонент Listing, ListingLayout</h3>
            {items && items.length ? <Listing items={items} /> :
                <p className="listing-alert">Данные не обнаружены...</p>
            }
        </div>
    )
};


export default ListingLayout;