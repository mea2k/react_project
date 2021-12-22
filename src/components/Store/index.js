import PropTypes from 'prop-types'
import { useState } from 'react';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

import { Products, ViewModes } from './const';

const Store = ({ products }) => {

    const [curIcon, setCurIcon] = useState(0);

    function changeView() {
        const newVal = (curIcon + 1) % ViewModes.length;
        console.log("Toggle view to " + ViewModes[newVal]);
        setCurIcon(newVal);
    }

    return (
        <div>
            <h2> Store </h2>
            <IconSwitch icon={ViewModes[curIcon]} onSwitch={changeView} />
            {curIcon && ViewModes[curIcon] === 'view_list' ?
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