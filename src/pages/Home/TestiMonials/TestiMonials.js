import React from 'react';
import './TestiMonials.css'
import titleImg from './title-separator.png'



const TestiMonials = () => {
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='container'>
            <div className="row g-3 container pt-3 mb-5">
                <div className="col-lg-4 col-md-12 d-flex  align-items-center">
                    <div className=" review-details">
                        <img src={titleImg} alt="separator" />
                        <h2>Parents <br /> About Me </h2>
                        <p>The information below will help you choose the right decision for your children.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="review  text-light">
                        <div className="review-text">
                            <p>Mandy is fantastic with my daughter and is excellent at feeding back, helping her understand things and moving her forward. I would highly recommend him! He comes across as very patient and able to work with any child and their level. Here's to many more sessions with him!</p>
                        </div>
                        <div>
                            <h3 className="author">Natalie C. </h3>
                            <span>Chief Manager , Bortika Afala  </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="review  text-light">
                        <div className="review-text">
                            <p >From my point of view I wanted to find a qualified teacher with real experience of teaching maths to my son's age group and slightly older children too who could encourage him to develop his maths skills even further.In Amy I think I have found exactly the right person.</p>
                        </div>
                        <div>
                            <h3 className="author">Hans Lee </h3>
                            <span> Manager , Toto Company  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestiMonials;