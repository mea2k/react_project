import PropTypes from 'prop-types'

// listing_id — уникальный идентификатор предложения, число;
// url — ссылка на предложение, строка;
// MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
// title — название предложения, строка;
// currency_code — код валюты, строка;
// price — цена, строка;
// quantity — доступное количество, число.


const Listing = ({ items }) => {

    return (
            <div class="item-list">
                {items.map((v) => (
                    <div className="item-list-item">
                        <div className="item-image">
                            <a href={v.url} target="_blank">
                                <img src={v.MainImage?.url_570xN} title={v.title} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{v.title?.length > 50 ? v.title.substr(0, 50) + '...' : v.title}</p>
                            <p className="item-price">{v.currency_code === 'USD' ? '$'+v.price :
                                v.currency_code === 'EUR' ? '€' + v.price :
                                    v.price + ' ' + v.currency_code
                            }
                            </p>
                            <p class={`item-quantity ${v.quantity <= 10 ? 'level-low' :
                                v.quantity <= 20 ? 'level-medium' : 'level-high'}`}>{v.quantity} left</p>
                        </div>
                    </div>
                ))}
            </div>
    )
};


Listing.propTypes = {
    items: PropTypes.array.isRequired
};



export default Listing;