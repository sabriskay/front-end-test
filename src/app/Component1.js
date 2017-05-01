import React, {Component} from 'react';
import {render} from 'react-dom';
import constants from './constants';

class Component1 extends Component {
    render () {
        return (
            <section className="short-description vip-bg-alt">
                <header className="vip-section-header">
                    <h1 className="vip-title-main">{constants.TITLE_PRODUCT}</h1>
                </header>
            </section>
        );
    }
}

export default Component1;
