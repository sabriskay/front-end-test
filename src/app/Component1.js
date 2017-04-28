import React, {Component} from 'react';
import {render} from 'react-dom';
import constants from './constants';

class Component1 extends Component {
    render () {
        return (
            <div>
                <div className="title-product">{constants.TITLE_PRODUCT}</div>
            </div>
        );
    }
}

export default Component1;
