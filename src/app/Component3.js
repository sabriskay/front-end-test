import React, {Component} from 'react';
import {render} from 'react-dom';
import constants from './constants';
import Component4 from './Component4/Component4';

class Component3 extends Component {
    render () {
        return (
            <div className="vip-product-info" id="productInfo">
                <fieldset className="vip-price-container">
                    <legend>{constants.PRICE_LEGEND}</legend>
                    <article className="vip-price ch-price">
                        <strong>
                            {constants.PRICE_PRODUCT_1}<sup>{constants.PRICE_PRODUCT_2}</sup>
                        </strong>
                    </article>
                </fieldset>
                <Component4/>
            </div>
        );
    }
}

export default Component3;
