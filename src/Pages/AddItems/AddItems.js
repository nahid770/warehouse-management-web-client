import React from 'react';
import {Form, ToastContainer } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import '../AddItems/AddItems.css'
// import { toast } from 'react-toastify';

const AddItems = () => {

    const addNewProduct = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const supplierEmail = e.target.supplierEmail.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const newProduct = {
            name,
            price,
            quantity,
            supplier,
            supplierEmail,
            img,
            description
        };

        fetch("http://localhost:5000/newProduct", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            // if(data.acknowledged === true){
            // toast(`${name} added successfull!`)
            // e.target.reset();
            // }
            alert(`${name} added successfull!`)
            e.target.reset();
            
            
        });
    };
    return (
        <div className='pt-5'>
            <Header></Header>
            <div className='container col-10 col-lg-6'>
            <h2 className=' text-primary text-center mt-5 mb-4'>Add New Bike </h2>
            
            <Form onSubmit={addNewProduct} className=''>
                <Form.Group className="mb-3 text-start d-flex justify-content-between align-items-center" controlId="formBasicText" >
                <Form.Label className=' fs-5'>Name</Form.Label>
                <Form.Control className='w-75' type="text" name="name" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3 text-start d-flex justify-content-between align-items-center" controlId="formBasicNumber">
                <Form.Label className='fs-5 '>Price</Form.Label>
                <Form.Control className='w-75' type="number" name="price" placeholder="price" />
                </Form.Group>

                <Form.Group className="mb-3 text-start d-flex justify-content-between align-items-center" controlId="formBasicNumber">
                <Form.Label className=' fs-5'>Quantity</Form.Label>
                <Form.Control className='w-75' type="number" name="quantity" placeholder="quantity" />
                </Form.Group>

                <Form.Group className="mb-3 text-start d-flex justify-content-between align-items-center" controlId="formBasicText">
                <Form.Label className=' fs-5'>Supplier</Form.Label>
                <Form.Control className='w-75' type="text" name="supplier" placeholder="supplier" />
                </Form.Group>

                <Form.Group className="mb-3 text-start d-flex justify-content-between align-items-center" controlId="formBasicEmail">
                <Form.Label className=' fs-5'>Supplier Email</Form.Label>
                <Form.Control className='w-75' type="email" name="supplierEmail" placeholder="supplier" />
                </Form.Group>

                <Form.Group className="mb-3 text-start d-flex justify-content-between align-items-center" controlId="formBasicText">
                <Form.Label className=' fs-5'>Photo</Form.Label>
                <Form.Control className='w-75' type="text" name="img" placeholder="photo url" />
                </Form.Group>

                <div className="mb-3 text-start d-flex justify-content-between align-items-center">

                <label for="exampleFormControlTextarea1" className="form-label fs-5">Description</label>
                <textarea className="form-control w-75"  type="textarea" name="description" id="exampleFormControlTextarea1" rows="3" placeholder='product description'></textarea>
                </div>
                {/* add new button */}
                <input className='btn btn-dark w-25' type="submit"  value="Add New bike" />
            </Form>
            </div>

            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItems;