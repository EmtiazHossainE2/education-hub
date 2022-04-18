import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import { BsBookmarkCheckFill } from 'react-icons/bs';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='col-lg-4 col-md-6 rounded-1 service-container'>
            <div className="cart mx-2 my-4 border border-1 ">
                <div className='text-center'>
                    <img className='product-img p-1 w-100' src={img} alt="" />
                </div>
                <div className='p-3'>
                    <h5 className=' text-capitalize'>{name}</h5>
                    <p className='mb-0'>{description.slice(0, 100)}</p>
                    <h6 className='mt-2 mb-0 fw-bolder'>Price : $ {price}</h6>
                    <Link to={'/checkout/' + id}><button className='btn btn-outline-danger text-capitalize mt-3 fw-bold'>Book Now: <span className='ps-3 fs-5'> <BsBookmarkCheckFill /></span> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;