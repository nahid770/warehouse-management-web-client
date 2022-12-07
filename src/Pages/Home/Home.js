import React from 'react';
import './Home.css'
import Inventory from '../Inventory/Inventory';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Hero from './Hero/Hero';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Inventory></Inventory>
            <div id='feature' className='rounded mt-5  h-25 my-5 container pb-4 '>
            <h1 className='text-info pt-5 pb-2'>World leaders for inventory management software</h1>
            <h3 className='text-secondary mb-5'>moto world manages over $140 Billion USD worth of inventory in over 130 countries.</h3>
            <div className='mb-5'>
                <div  className="row ">
                <div className='col-lg-4 col-md-6 col-10  py-2 '>
                    <h1 className='text-info'>six +</h1>
                    <p className='text-secondary fw-bold'>Items tracked dailly</p>
                </div>
                <div className='col-lg-4 col-md-6 col-10 '>
                    <h1 className='text-info'>100</h1>
                    <p className='text-secondary fw-bold'>Invoiced assets daily</p>
                </div>
                <div className='col-lg-4 col-md-6 col-10 '>
                    <h1 className='text-info'>100 +</h1>
                    <p className='text-secondary fw-bold'>page request/mo</p>
                </div>
                </div>
            </div>
            </div>

           

            <div className='d-flex justify-content-between container my-5 py-5 bg-info'>
                <div>
                <h1 className='ps-3'>Unleash your growth potential</h1>
                <p className='text-secondary fw-bold'>No credit card required - Instant access</p>
                </div>
                <div >
                    <button className='btn btn-success ps-3 pe-3 py-2 '>Start Now It's Free</button>
                </div>
            </div>

            <div className='py-5'>
                <div>
                    <h2>Subscribe to our Newsletter</h2>
                    <p>know all the updates we made everytime and get some tips and tricks about managing your products</p>
                </div>
                <div className='newsletter'>
                    <input type="email" name="email" id="" placeholder='your email'/>
                    <button className='btn btn-info ms-3 '>Subscribe</button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;