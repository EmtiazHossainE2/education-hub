import React  from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services] = useServices()

    return (
        <div id='services' className='container my-5'>
            <div className='text-center'>
                <h2 className='text-uppercase service-title'>my programs </h2>
                <p className='fs-4 fst-italic'>Make a difference in the life of a child with a need</p>
                <div className='row  mx-0 '>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;