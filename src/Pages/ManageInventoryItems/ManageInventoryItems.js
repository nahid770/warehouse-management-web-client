import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const ManageInventoryItems = () => {
    const [inventoryItems, setinventoryItems] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res =>res.json())
        .then(data => setinventoryItems(data))
    },[])

    // delete a product
    const deleteItem = (id) =>{
      const agree = window.confirm('Are you sure want to delete this item?');
      
    if(agree){
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data)
        
      const remainingItem = inventoryItems.filter((item)=> item._id !== id)
      setinventoryItems(remainingItem);
        
      })
    }
    console.log(id)
    
    }



    return (
        <div className='pt-5'>
            <Header></Header>
            <h2 className='text-info mt-5'>Manage all the bikes </h2>
    <Table responsive className='container mt-5 border shadow rounded bg-light '>
      <thead>
        <tr>
          <th>Serial</th>
            <th>Name</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Remove</th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody>
        {
            inventoryItems.map((inventoryItem, index) => <tr>
                <td>{index + 1}</td>
                  <td>{inventoryItem.name}</td>
                  <td>{inventoryItem.price}</td>
                  <td>{inventoryItem.supplier}</td>
                  <td>{inventoryItem.quantity}</td>
                  <td> <Button onClick={()=> deleteItem(inventoryItem._id)} variant="danger">Delete</Button></td>
                  
              </tr>)
        }
      </tbody>
    </Table>
    <Link to='/additems' className='btn btn-dark border'>Add New Item</Link>
        <Footer></Footer>
    </div>
    );
};

export default ManageInventoryItems;