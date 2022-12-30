import React from 'react';
import './Home.css'
import Inventory from '../Inventory/Inventory';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Hero from './Hero/Hero';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Inventory></Inventory>
            <div id='feature' className='rounded mt-5  h-25 my-5  mx-auto pb-4 '>
            <h1 className='text-info pt-5 pb-2 display-5 w-75 mx-auto'>World leaders for inventory management software</h1>
            <p className='text-dark fs-5 w-50 mx-auto  mb-5'>moto world manages over $140 Billion USD worth of inventory in over 130 countries.</p>
            <div className='mb-5 container'>
                <div  className="row mx-auto justify-content-center gap-lg-2 gap-4">
                <div className='col-lg-4 col-md-6 col-10 py-2 border rounded-3 bg-dark'>
                    <h1 className='text-info'>six +</h1>
                    <p className='text-light fs-5'>Items tracked dailly</p>
                </div>
                <div className='col-lg-4 col-md-6 col-10 bg-dark py-2 rounded-3'>
                    <h1 className='text-info '>100</h1>
                    <p className='text-light fs-5'>Invoiced assets daily</p>
                </div>
                <div className='col-lg-4 col-md-6 col-10 rounded-3 bg-dark py-2'>
                    <h1 className='text-info'>100+</h1>
                    <p className='text-light fs-5'>page request/mo</p>
                </div>
                </div>
            </div>
            </div>

           

            <div className='lg:d-flex container-fluid justify-content-around align-content-center py-5  bg-info'>
                <div>
                <h1 className='ps-3 mx-auto text-light display-5'>Unleash your growth potential</h1>
                <p className='text-dark fs-5'>No credit card required - Instant access</p>
                </div>
                <div >
                    <Link to="/login" className='btn btn-dark mt-4 py-2 rounded-1 fs-5'>Start Now It's Free</Link>
                </div>
            </div>

            <div className='banner pt-5 max-h-100 w-full'>
                <p className='banner-title shadow-lg text-light  display-4 py-3'>Maximize your <span className='text-info'>Warehouse</span> efficiency</p>

                {/* <p className='banner-second-title text-light w-50 mx-auto fs-3 py-2 shadow'>Explore all in One inventory management app <span className='text-info fs-4'>Moto World</span></p> */}
            </div>

            <div className='py-5 my-5'>
                <div>
                    <h2 className='display-5 '>Get started now and explore Moto World</h2>
                    <p className='w-50 mx-auto mb-3 '>know all the updates and get some tips and tricks about managing your products</p>
                </div>

                <div>
                    
                    <Link to='/register' className='btn btn-dark mt-2 px-5 py-3 rounded-5 fs-5 ms-3 '>Register</Link>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;