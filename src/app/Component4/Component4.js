import React, {Component} from 'react';
import {render} from 'react-dom';
import constants from '../constants';
import Select from 'react-select';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import CarouselImage from '../CarouselImage';

function selectOption(maxValue) {
    var funcs = [];
    for (let i = 1; i <= maxValue; i++) {
        funcs.push({
                value:i,
                label:i
            }
        );
    }
    return funcs;
}

class Component4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueQuantity: '1',
            valuePayment: '1'
        };

        this.handleChange = this.handleChange.bind(this);
        this.paymentChange = this.paymentChange.bind(this);
    }
    handleChange(event) {
        this.setState({valueQuantity: event.value});
    }

    paymentChange(event) {
        this.setState({valuePayment: event.value});
    }

    render () {
        return (
            <fieldset className="vip-stock-select quantity-selection">
                <div className="stock-string">
                    <legend className="test">{constants.QUANTITY_LEGEND}</legend>
                    <Select
                        className={"stock-quantity"}
                        value={this.state.valueQuantity}
                        options={selectOption(10)}
                        onChange={this.handleChange}
                        clearable={false}
                        placeholder={1}
                    />
                </div>
                <div className="stock-string">
                    <legend>{constants.PAYMENT_LEGEND}</legend>
                    <Select
                        className={"stock-payment"}
                        value={this.state.valuePayment}
                        options={selectOption(12)}
                        onChange={this.paymentChange}
                        clearable={false}
                        placeholder={1}
                    />
                </div>
                <ButtonBuy />
                <div className="info-message">{constants.INFO_MESSAGE}</div>
            </fieldset>
        );
    }
}

export default Component4;