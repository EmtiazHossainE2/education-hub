import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../Firebase/firebase.init';
import './Contact.css'

const Contact = () => {


    const [yourName, setYourName] = useState({ value: "", error: "" })
    const [email, setEmail] = useState({ value: "", error: "" })
    const [city, setCity] = useState({ value: "", error: "" })
    const [number, setNumber] = useState({ value: "", error: "" })


    const [updateProfile, updating, error] = useUpdateProfile(auth);


    //handle first name 
    const handleYourName = event => {
        const name = event.target.value;
        setYourName(name)
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
        setCity(cityValue)
    }

    //handle number
    const handleNumber = event => {
        const numberValue = event.target.value;
        setNumber(numberValue)
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

        if (yourName.value && email.value && city.value && number.value) {
            const name = event.target.name.value
            await updateProfile({ displayName: name });
            toast.success(`Thanks for booking .I will contact you soon .`, { id: "booking" });
            console.log(name);
        }
        // const name = event.target.name.value
        // console.log(name);
    }


    return (
        <div className='overflow-hidden container'>
            <div className="row py-5">
                <div className=" col-md-6 py-5 d-flex align-items-center justify-content-center contact-container">
                    <Form onSubmit={handleSubmit} className='w-75 '>
                        <div className='pb-4 text-center'>
                            <h1 className='text-light fs-1 text-uppercase'>Contact Me</h1>
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

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label> <span className='text-light'>Your Message</span> </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='w-100 fs-5'>
                            Send Now
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>
    );
};

export default Contact;