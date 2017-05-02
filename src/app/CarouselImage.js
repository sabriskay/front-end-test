import React, {Component} from 'react';
import {render} from 'react-dom';

class CarouselImage extends Component {

    render() {
        return (
            <div className="ch-carousel">
                <ul>
                    <li><img src="./src/images/Ipad-Mini-Apple-16gb-1.jpg"/></li>
                    <li><img src="./src/images/Ipad-Mini-Apple-16gb-2.jpg"/></li>
                    <li><img src="./src/images/Ipad-Mini-Apple-16gb-3.jpg"/></li>
                    <li><img src="./src/images/Ipad-Mini-Apple-16gb-4.jpg"/></li>
                    <li><img src="./src/images/Ipad-Mini-Apple-16gb-5.jpg"/></li>
                </ul>
            </div>
        );
    }
}

export default CarouselImage;
