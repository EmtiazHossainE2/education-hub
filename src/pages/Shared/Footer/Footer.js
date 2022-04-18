import React from 'react';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div className='  py-4 bg-dark text-light'>
            <FooterTop />
            <FooterBottom />
        </div>
    );
};

export default Footer;