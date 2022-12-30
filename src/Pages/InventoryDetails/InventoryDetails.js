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
    }, [id])

    const {name, img, description, price, supplier, quantity } = inventory;

    // handle deliverd item
    const deliverd = (e) =>{
        e.preventDefault();
        const newQuantity = quantity - 1;
        const newData = {quantity: newQuantity};
        console.log(newData);

        fetch( `http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },

            body: JSON.stringify(newData),
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            window.location.reload();
        })
    }

    // update product
    const updateProduct = (e) =>{
        e.preventDefault();
        const number = parseInt(e.target.quantity.value);
        const newQuantity = parseInt(quantity) + number;
        const newData = {quantity: newQuantity};
        console.log(newData)
        
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(newData)
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            window.location.reload();
        })
    }

    return (
        <div className=''>
            <Header></Header>
            
            <div className='d-flex justify-content-between shadow-sm rounded-2 container  my-5'>
                <div className='w-50'>
                    <img className='w-50d' src={img} alt="bike" />
                    
                </div>
                <div className='w-50  ps-5'>
                <h2 className='my-3 text-info display-5 '>{name}</h2>
                <p className='text-start fs-5'>{description}</p>
                <p className='text-start'><span className='fs-5'>Bike Id:</span> {inventory._id}</p>
                <p className='text-start'><span className='fs-5'>Price:</span> {price}</p>
                <p className='text-start'><span className='fs-5'>Supplier:</span> {supplier}</p>
                <p id='quantity' className='text-start'><span className='fs-5'>Quantity:</span> {quantity}</p>

                
                <div className='d-flex justify-content-between mt-5 pt-2 '>
                <button onClick={deliverd} className='btn btn-dark rounded-sm text-light' >Delivered</button>
                <div className='d-flex gap-x-2'>

                    <form onSubmit={updateProduct} action="">
                    <input className='rounded-2 border ps-2 py-2'  type="number"
                    name="quantity" id="" placeholder='update stock' required/>
                    <input className='btn btn-dark ms-2 text-white px-3 py-2' type="submit" value="update" />
                    </form>
                </div>
                </div>
                </div>
            </div>
            

            <Footer></Footer>
        </div>
    );
};

export default InventoryDetails;