import React, { Component } from 'react';
import PropTypes from 'prop-types'



class ShopItemClass extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (



           <div className="main-content">
                <h2>{this.props.brand}</h2>
                <h1>{this.props.title}</h1>
                <h3>{this.props.description} </h3>
                <div className="description">
                    {this.props.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">
                        <span>{this.props.currency}</span>
                        <b>{this.props.price}</b>
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>


        )
    }
};


ShopItemClass.propTypes = {
    brand: PropTypes.string,            // название производителя товара,
    title: PropTypes.string.isRequired, // название товара,
    description: PropTypes.string,      // краткое описание товара,
    descriptionFull: PropTypes.string,  // подробное описание товара,
    price: PropTypes.number.isRequired, // цена товара,
    currency: PropTypes.string          // валюта товара.
};

ShopItemClass.defaultProps = {
    brand: '',           
    title: '',         
    description: '',   
    descriptionFull: '',
    price: 0,            
    currency: 'р'        
};




export default ShopItemClass;
