import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useServices from '../../hooks/useServices';
import Rating from '../Ratings/Ratings';
import './CheckOut.css'

const CheckOut = () => {
    const { checkoutId } = useParams()
    const [services] = useServices()
    const [terms, setTerms] = useState(false)

    const [yourName, setYourName] = useState({ value: "", error: "" })
    const [email, setEmail] = useState({ value: "", error: "" })
    const [city, setCity] = useState({ value: "", error: "" })
    const [number, setNumber] = useState({ value: "", error: "" })

    const singleService = services.find((service) => service.id === (checkoutId)
    )

    const [updateProfile, updating, error] = useUpdateProfile(auth);


    //handle first name 
    const handleYourName = event => {
        const name = event.target.value;
        setYourName({ value: name, error: "" })
        console.log(name);
    }

    //handle email
    const handleEmail = event => {
        const emailValue = event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    }
    //handle city 
    const handleCity = event => {
        const cityValue = event.target.value;
        setCity({ value: cityValue, error: "" })
    }

    //handle number
    const handleNumber = event => {
        const numberValue = event.target.value;
        setNumber({ value: numberValue, error: "" })
    }

    // handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault()

        //validation check
        if (yourName.value === "") {
            setYourName({ value: "", error: "Name is required" });
        }
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (city.value === "") {
            setCity({ value: "", error: "City is required" });
        }
        if (number.value === "") {
            setNumber({ value: "", error: "Number is required" });
        }
        // console.log(yourName.value, email.value, city.value, number.value);

        if (yourName.value && email.value && city.value && number.value) {
            const name = event.target.name.value
            await updateProfile({ displayName: name });
            toast.success(`Thanks for booking .I will contact you soon .`, { id: "booking" });
        }
    }


    return (
        <div>
            <div className="row container my-5">
                <div className="col-lg-6  d-flex ps-5 justify-content-center align-items-center ">
                    <div className='mt-3 checkout-container'>
                        <div className='text-center pt-2'>
                            <img className='w-100  rounded p-1' src={singleService?.img} alt="img" />
                        </div>
                        <div className=' px-5'>
                            <h1 className='text-capitalize'> {singleService?.name} </h1>
                            <div className="rating my-2">
                                {singleService && <Rating ratings={singleService?.ratings} ></Rating>}
                            </div>
                            <h5 className='my-3'>Price $: {singleService?.price} </h5>
                            <p><strong>Description : </strong> {singleService?.description} </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex ps-5 justify-content-center align-items-center">

                    <Form onSubmit={handleSubmit} className='w-100'>
                        <div className='pb-4 text-center'>
                            <h2>Book This Service</h2>
                        </div>
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Control type="name" className='py-2' onBlur={handleYourName} name='name' placeholder="Your name" />
                        </Form.Group>
                        {yourName?.error && <p className="text-danger"> {yourName.error}</p>}


                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" onBlur={handleEmail} className='py-2' name='email' placeholder="Enter email" />
                        </Form.Group>
                        {email?.error && <p className="text-danger"> {email.error}</p>}

                        <Form.Group className='mb-3' controlId="validationCustom03">
                            <Form.Control type="text" onBlur={handleCity} placeholder="City" />
                        </Form.Group>
                        {city?.error && <p className="text-danger"> {city.error}</p>}

                        <Form.Group className="mb-3 " controlId="formBasicNumber">
                            <Form.Control type="text" onBlur={handleNumber} className='py-2' name='number' placeholder=" Contact number" />
                        </Form.Group>
                        {number?.error && <p className="text-danger"> {number.error}</p>}

                        <Form.Group className="position-relative mb-3">
                            <Form.Control
                                type="file"
                                name="file"
                            />
                        </Form.Group>


                        <div className='d-flex terms-condition   '>
                            <div className=' mb-3 '>
                                <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                                <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                            </div>
                        </div>
                        <Button disabled={!terms} variant="primary" type="submit" className='w-100 fs-5'>
                            Book Now
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;