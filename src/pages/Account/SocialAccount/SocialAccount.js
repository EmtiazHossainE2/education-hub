import React from 'react';
import './SocialAccount.css'
import google from '../../../images/social/Google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import twitter from '../../../images/social/Twitter.png'

const SocialAccount = () => {

    return (
        <div >
            <div className='or-style d-flex align-items-center justify-content-center'>
                <div style={{height: '2px',width : '40%'}} className='line-left d-block bg-dark'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{height: '2px',width : '40%'}} className='line-right d-block bg-dark'></div>
            </div>
            
            <div className='social-icon d-flex align-items-center justify-content-center container'>
                <img  src={google} alt="" />
                <img  src={facebook} alt="" />
                <img  src={github} alt="" />
                <img  src={twitter} alt="" />
            </div>
        </div>
    );
};

export default SocialAccount;