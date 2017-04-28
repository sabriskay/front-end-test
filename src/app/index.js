import React, {Component} from 'react';
import {render} from 'react-dom';
import Component1 from './Component1';

class App extends Component {
    render () {
        return (
            <Component1 />
        );
    }
}

render(<App/>, document.getElementById('app'));