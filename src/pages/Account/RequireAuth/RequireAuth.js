import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import auth from '../../../Firebase/firebase.init';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(auth);
    const [user, userLoading, userError] = useAuthState(auth)

    let location = useLocation();

    if (userLoading || sending) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    else if (user?.emailVerified === false) {
        return <div className='text-light py-5 rounded-2 text-center w-50 m-auto my-3 bg-dark'>
            <h2>Your email is not verified .  </h2>
            <h2>Please check your email to verify</h2>
            <button className='btn text-dark btn-light  mt-4 py-2 '
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email');
                }}
            >
                Resend Verification
            </button>
        </div>
    }

    return children;
};

export default RequireAuth;