import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service
    return (
        <div className='col-lg-4 col-md-6 rounded-1'>
            <div className="cart mx-2 my-3 border border-1 ">
                <div className='text-center'>
                    <img className='product-img p-2 w-100' src={img} alt="" />
                </div>
                <div className='p-3'>
                    <h5 className='mt-1 text-capitalize'>{name}</h5>
                    <p className='mb-0'>{description.slice(0, 100)}</p>
                    <h6 className='my-2 fw-bolder'>Price : $ {price}</h6>
                    <Link to={'/services/' + id}><button className='btn btn-outline-danger mt-4'>Book Now: {name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;