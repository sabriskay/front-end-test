import React, {Component} from 'react';
import {render} from 'react-dom';

class CarouselImage extends Component {
    render() {
        return (
            <div className="demo-carousel ch-carousel">
                <ul>
                    <li><img src="./src/views/Ipad-Mini-Apple-16gb-1.jpg"/></li>
                    <li><img src="./src/views/Ipad-Mini-Apple-16gb-2.jpg"/></li>
                    <li><img src="./src/views/Ipad-Mini-Apple-16gb-3.jpg"/></li>
                    <li><img src="./src/views/Ipad-Mini-Apple-16gb-4.jpg"/></li>
                    <li><img src="./src/views/Ipad-Mini-Apple-16gb-5.jpg"/></li>
                </ul>
            </div>
        );
    }
}

/*var carousel = new ch.Carousel(('.demo-carousel')[0], {
    'fx': false
});*/

export default CarouselImage;
