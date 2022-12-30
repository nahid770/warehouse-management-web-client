import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const InventoryItem = ({product}) => {
    const {_id, name, price, description, img , supplier, quantity }= product
    const navigate = useNavigate();
    const handleUpdatebutton = id =>{
      navigate(`/product/${id}`)
    }
    return (
        <div >
    
    <Card style={{ width: '20rem'}} className=''>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p className='text-secondary'> {description}</p>
          <h5 className='text-dark'>Price: <span className='text-info'>{price}</span></h5>
          <p>{}</p>
          <small className='fw-bold text-secondary'> Supplier Name: {supplier}</small>
        </Card.Text>
       <div className='d-flex justify-content-between align-content-center'>
        <p className='text-dark fw-bold '>Quantity: <span className='text-info'>{quantity}</span></p>

       <Button onClick={()=> handleUpdatebutton(_id)} variant="dark" className='bg-dark text-light fs-5'>Update</Button>
       </div>
      </Card.Body>
    </Card>
    </div>
      
    );
};

export default InventoryItem;