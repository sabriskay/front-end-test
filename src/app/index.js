import React, {Component} from 'react';
import {render} from 'react-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

class App extends Component {

    render () {
        return (
            <div className="nav-main-content">
                <Component1 />
                <section className="vip-section-description vip-bg-alt" id="shortDescription">
                    <nav className="vip-container">
                        <Component2 />
                        <Component3 />
                    </nav>
                </section>
            </div>

        );
    }
}

render(<App/>, document.getElementById('app'));