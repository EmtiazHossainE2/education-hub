import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Rating from '../Ratings/Ratings';

const CheckOut = () => {
    const { detailsId } = useParams()
    const [services] = useServices()

    const singleService = services.find((service) => service.id === (detailsId)
    )
    
    //booking toast
    const bookNow = () => {
        toast.success(`Thanks for booking .We will contact you soon .`, { id: "booking" });
    }

    return (
        <div>
            <div className="row container my-5">
                <div className="col-lg-6  d-flex ps-5 justify-content-center align-items-center ">
                    <div className='mt-3'>
                        <h1 className='text-capitalize'> {singleService?.name} </h1>
                        <p><strong>Description : </strong> {singleService?.description} </p>
                        <h5 className='my-3'>Price $: {singleService?.price} </h5>
                        <div className="rating my-2">Rating
                            <Rating ratings={singleService?.ratings} ></Rating>
                        </div>
                        <button className='btn btn-danger' onClick={bookNow}>Book Now</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex ps-5 justify-content-center align-items-center">
                    <div className='text-center'>
                        <img className='w-100  rounded p-1' src={singleService?.img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;