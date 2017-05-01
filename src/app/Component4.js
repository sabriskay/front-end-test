import React, {Component} from 'react';
import {render} from 'react-dom';
import constants from './constants';

class Component4 extends Component {
    render () {
        return (
            <fieldset className="vip-stock-quantity quantity-selection">
                <div className="stock-string">
                    <legend>{constants.QUALITY_LEGEND}</legend>
                </div>
                <div className="stock-quantity quantity-selection__controls">
                </div>
            </fieldset>
        );
    }
}

export default Component4;