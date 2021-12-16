import React, { Component } from 'react';



class ShopItemClass extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="main-content">
                <h2>{this.props.brand}</h2>
                <h1>{this.props.title}</h1>
                <h3>{this.props.description} </h3>
                <div class="description">
                    {this.props.descriptionFull}
                </div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">
                        <span>{this.props.currency}</span>
                        <b>{this.props.price}</b>
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>


        )
    }
};


export default ShopItemClass;
