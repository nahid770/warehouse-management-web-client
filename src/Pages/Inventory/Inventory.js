import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'


const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res =>res.json())
        .then(data => setProducts(data))

      
    },[])
    return (
        
        <div  className='container'>
        
         <h3 className='text-center d-block my-5 text-info fs-1'>Products In Inventory</h3>
         <div id="bike">
            
          {
            products.map(product => <InventoryItem
            key={product._id}
            product = {product}
            ></InventoryItem>)
           }
         </div>
        </div>
    );
};

export default Inventory;