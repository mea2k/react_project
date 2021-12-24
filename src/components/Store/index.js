import PropTypes from 'prop-types'
import { useState } from 'react';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

import { Products, ViewModes } from './const';

import './main.css';

const Store = ({ products }) => {

    const [curIcon, setCurIcon] = useState(1);

    function changeView() {
        const newVal = (curIcon + 1) % ViewModes.length;
        console.log("Toggle view to " + ViewModes[newVal]);
        setCurIcon(newVal);
    }

    return (
        <div>
            <h1>Store</h1>
            <h3>Компонент Store</h3>
            <IconSwitch icon={ViewModes[curIcon]} onSwitch={changeView} />
            {ViewModes[curIcon] === 'view_list' ?
                <ListView items={products} /> :
                <CardsView cards={products} />
            }
        </div>
    )
};


Store.propTypes = {
    products: PropTypes.array
};

Store.defaultProps = {
    products: Products
};


export default Store;