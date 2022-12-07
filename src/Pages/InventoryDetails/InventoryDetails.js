import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const InventoryDetails = () => {
    const {id} = useParams();
    const [inventory , setInventory] = useState({});

    useEffect(()=>{
    const url = `http://localhost:5000/product/${id}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => setInventory(data))
    }, [])
    
    return (
        <div>
            <Header></Header>
            
            <div className='d-flex justify-content-between shadow-sm container borderv my-5'>
                <div className='w-50'>
                    <img className='w-50' src={inventory.img} alt="bike" />
                    
                </div>
                <div className='w-50 border-start ps-5'>
                <h2 className='my-3 text-info '>{inventory.name}</h2>
                <p className='text-start'>{inventory.description}</p>
                <p className='text-start'>Bike Id: {inventory._id}</p>
                <p className='text-start'>Price: {inventory.price}</p>
                <p className='text-start'>Supplier: {inventory.supplier}</p>
                <p className='text-start'>Quantity: {inventory.quantity}</p>

                
                <div className='d-flex justify-content-between mt-5 pt-3 '>
                <button className='btn btn-info rounded-sm text-light'>Delivered</button>
                <div className='d-flex gap-x-2'>
                    <input className='rounded-2 border ps-2' type="text" name="number" id="" placeholder='stock item' required/>
                    <button className='btn btn-info rounded-sm text-light ms-2'>Restock</button>
                </div>
                </div>
                </div>
            </div>
            

            <Footer></Footer>
        </div>
    );
};

export default InventoryDetails;