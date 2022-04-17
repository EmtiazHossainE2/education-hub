import React from 'react';
import './SocialAccount.css'
import google from '../../../images/social/Google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import twitter from '../../../images/social/Twitter.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import toast from "react-hot-toast";

const SocialAccount = () => {
    const navigate = useNavigate()

    //google
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    //facebook
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    //github 
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    //success
    if (googleUser || facebookUser || githubUser) {
        toast.success(`Welcome to Education Hub `, { id: "welcome" });
        navigate(from)
    }

    // loading 
    if (googleLoading || facebookLoading || githubLoading) {
        return <Loading />
    }

    //error 
    let errorMessage;
    if (googleError || facebookError || githubError) {
        toast.error(`Something is wrong`, { id: "error" });
        errorMessage = <p className='text-danger'>Error: Something is wrong.Try again please
        </p>
    }

    //
    const handleTwitter = () => {
        toast.error(`Twitter Singin not available right now`, { id: "error" });
    }

    return (
        <div >
            <div className='or-style d-flex align-items-center justify-content-center'>
                <div style={{ height: '2px', width: '40%' }} className='line-left d-block bg-dark'></div>
                <p className='mt-2 px-3'>Or</p>
                <div style={{ height: '2px', width: '40%' }} className='line-right d-block bg-dark'></div>
            </div>
            {errorMessage}
            <div className='social-icon d-flex align-items-center justify-content-center container'>
                <img onClick={() => signInWithGoogle()} src={google} alt="" />
                <img onClick={() => signInWithFacebook()} src={facebook} alt="" />
                <img onClick={() => signInWithGithub()} src={github} alt="" />
                <img onClick={handleTwitter} src={twitter} alt="" />
            </div>
        </div>
    );
};

export default SocialAccount;