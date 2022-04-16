import React from 'react';
import './Banner.css'

// banner 
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    

    return (
        <div className=''>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>My Extreme Mission</h3>
                        <p>Functional development to describe individuals who require <br /> assistance for disabilities that may be medical <br /> or psychological. For instance, the Diagnostic Statistical Manual of Mental Disorders.</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>My Ultra Vission</h3>
                        <p>The term Special Needs in the education setting comes <br /> into play whenever a child's education <br /> program is officially altered from what would normally be provided.</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>My Super Goal </h3>
                        <p>More narrowly, it is a legal term applying in foster <br /> care in the United States, derived from the language <br /> in the Adoption and Safe Families Act.</p>
                        <button className='btn btn-danger'>Explore More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
};

export default Banner;