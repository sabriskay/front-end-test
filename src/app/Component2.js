import React, {Component} from 'react';
import {render} from 'react-dom';
import Image from './ImageProduct';

class Component2 extends Component {
    render () {
        return (
            <div className="vip-gallery-container">
                <div id="productGalleryCollection" className="vip-gallery" data-gallery>
                    <div id="gallery_dflt" className="product-gallery thumbs-col-1 ch-enlarge ch-points-ltrt">
                        <div className="gallery-content">
                            <div className="gallery-image-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Component2;
