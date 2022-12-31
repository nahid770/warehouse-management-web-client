import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'


const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://warehouse-management-server.vercel.app/product')
        .then(res =>res.json())
        .then(data => setProducts(data))

      
    },[])
    return (
        
        <div  className='container'>
        
         <h3 className='text-center d-block my-5 text-dark bg-light rounded-3 w-50 mx-auto  display-5 pb-4 '>Products In Inventory</h3>
         <div id="bike" className=''>
            
          {
            products.map(product => <InventoryItem
            
            key={product._id}
            product = {product}
            ></InventoryItem>)
           }

           
         </div>
         <div className='block text-center'> 
           <Link to="/allinventory" className='btn btn-dark rounded-3 text-light px-4 py-2 fs-5  my-5'>Manage Inventory</Link>
           </div>
        </div>
    );
};

export default Inventory;