import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-secondary mt-5 mb-0 py-5 w-100 h-25 '>

            
            
            <Link className='pe-3  text-decoration-none text-info' to='/'>Home</Link>
            <Link className='pe-3  text-decoration-none text-info' to='/blog'>Blog</Link>
            <Link className='pe-3  text-decoration-none text-info' to='/inventory'>inventory</Link>

            <div className='mt-3'> 
                <p className='text-center text-dark '>copyright &copy; 2022, All Rights Reserved</p>
            </div>


        </div>

       
    );
};

export default Footer;