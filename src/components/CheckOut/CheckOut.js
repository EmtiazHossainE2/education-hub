import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const CheckOut = () => {
    const {detailsId} = useParams()
    const [services] = useServices()

    const singleService = services.find((service) => service.id === (detailsId)
    )


    return (
        <div>
            <div className="row container my-5">
                <div className="col-lg-6  d-flex ps-5 justify-content-center align-items-center ">
                    <div className='mt-3'>
                        <h1 className='text-capitalize'> {singleService?.name} </h1>
                        <p><strong>Description : </strong> {singleService?.description} </p>
                        <h5 className='my-3'>Price $: {singleService?.price} </h5>
                        <p>Ratings : {singleService?.ratings} </p>
                        <button className='btn btn-danger'>Book Now</button>
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