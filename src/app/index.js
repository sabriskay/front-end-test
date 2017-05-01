import React, {Component} from 'react';
import {render} from 'react-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

class App extends Component {

    /*componentDidMount() {
        var autocomplete = new ch.Autocomplete('.my-autocomplete', {
            'loadingClass': 'custom-loading',
            'positioned': 'fixed'
        });
    }*/

    render () {
        return (
            <div className="nav-main-content">
                <Component1 />
                <section className="vip-section-description vip-bg-alt" id="shortDescription">
                    <Component2 />
                    <Component3 />
                </section>
            </div>

        );
    }
}

render(<App/>, document.getElementById('app'));