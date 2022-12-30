import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-dark mt-5 mb-0 py-5 w-100 h-25 fixed'>

            
            
            <Link className='pe-3  text-decoration-none text-info fs-5' to='/'>Home</Link>
            <Link className='pe-3  text-decoration-none text-info fs-5' to='/blog'>Blog</Link>
            <Link className='pe-3  text-decoration-none text-info fs-5' to='/inventory'>inventory</Link>

            <div className='mt-3'> 
                <p className='text-center text-light '>copyright &copy; 2022, All Rights Reserved</p>
            </div>


        </div>

       
    );
};

export default Footer;