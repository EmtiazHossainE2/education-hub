import React from 'react';
import './About.css'
import me from '../../images/me.png'
import { GiStairsGoal } from 'react-icons/gi';

const About = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <h2>Md. Emtiaz Hossain Emon</h2>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <h4 > <strong>My Goal <b className='fs-1 text-primary'><GiStairsGoal /></b> </strong> </h4>
                    <p>In 2022 , I'll learn everything what I need to be a junior Front-end developer . Currently I'm explore reactjs and continue a Complete web development course . After finish this course I will try to get a job so that i can learn more with working others . My future goal is React Native developer . Whereas i'am learning react so I think in future I can explore and learn react native . Also this year i'm trying to admit a public university . </p>

                    <h4> <strong>How I am working hard to achieve my goal </strong> </h4>
                    <p> I am enrolled in a web development course. So I'm trying to continue with them what they tell me what to do. Everyday I'm complete my module ,get notes what i need, trying to go support session to help my classmates . I think it will very helpful for me . When I face error first try to console out this error . Now a days i'am solve myself every error .If need I can google and go support session . Sometimes I try to read doc but unfortunately everyday i can't but highly try to read doc . </p>


                </div>
                <div className="col-md-6">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='w-75 rounded-1' src={me} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;