import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import { Button, Form } from 'react-bootstrap';
import SocialAccount from '../SocialAccount/SocialAccount';

const Signup = () => {
    const navigate = useNavigate()
    const [terms, setTerms] = useState(false)

    return (
        <div className='login-bg-img'>
            <div className="account-container container py-4 ">
                <div className=" text-light custom-style ">
                    <h3 className='text-center pb-3'>Hello There,</h3>
                    <h5 className='text-center pb-3'>Register now to explore more</h5>

                    <Form >
                        <Form.Group className="mb-3 " controlId="formBasicUsername">
                            <Form.Control type="name" className='py-2' name='name' placeholder="Enter name" required />
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control type="email" className='py-2' name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" className='py-2' name='password' placeholder="Password" required />
                        </Form.Group>
                        <div className='d-flex terms-condition   '>
                            <div className=' mb-3 '>
                                <input onClick={() => setTerms(!terms)} type="checkbox" name="terms" id="terms" />
                                <label className={terms ? 'ps-1 text-primary' : 'ps-1 text-danger'} htmlFor="terms" style={{ cursor: 'pointer' }}>Accept Terms and Conditions</label>
                            </div>
                        </div>
                        <Button disabled={!terms} variant="primary" type="submit" className='w-100 fs-5'>
                            Register
                        </Button>
                    </Form>
                    <p className='toggle-page pt-2'>
                        Already have an account  ?{" "}
                        <span onClick={() => navigate("/login")}>Please Login</span>
                    </p>
                    <SocialAccount></SocialAccount>
                </div>
            </div>
        </div>
    );
};

export default Signup;