import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBottom.css';

import { MdCastForEducation } from 'react-icons/md';
const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='container my-3'>
            <div className="footer-bottom">
                <div className="terms-condition">
                    <Link to='/'>privacy policy</Link>
                    <Link to='/'>terms of use</Link>
                    <Link to='/'>pricing</Link>
                </div>
                <div className="copy-right">
                    <p><MdCastForEducation /> Copyright © {currentYear} 
                        <Link to='/' > Education Hub   </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;


//<h5>Copyright © {currentYear} <Link to='/' className='text-danger text-decoration-none'>Red Onion Roaster</Link></h5>