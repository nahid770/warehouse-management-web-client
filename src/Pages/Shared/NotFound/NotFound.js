import React from 'react';
import img from '../../../Images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <h5 className='text-danger text-center py-4'>Oops Page not found! </h5>
            <div className='text-center'>
            <img width={'400px'} src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;