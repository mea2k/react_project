import PropTypes from 'prop-types'
import ShopItem from './ShopItem';

const ListView = ({ items }) => (
    <div className="store-container">
        <ul>
            {items && items.map((v, key) => (
                <ShopItem item={v} key={`si_${key}`} />
            ))}
        </ul>
    </div>
);


ListView.propTypes = {
    items: PropTypes.array.isRequired
}



export default ListView;