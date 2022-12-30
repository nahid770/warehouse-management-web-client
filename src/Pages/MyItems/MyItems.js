import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [bikes, setBikes] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/myItems?email=${user?.email}`
        // console.log(url)
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            setBikes(data);
        })
    }, [user?.email])
    return (
        <div className='pt-5'>
            <Header></Header>
            
            <div className='pt-5'>
            <h2 className='pt-3'>My Items</h2>
            <Table responsive className='container mt-5 border shadow rounded '>
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
            bikes.map((bike, index) => <tr>
                <td>{index + 1}</td>
                  <td>{bike.name}</td>
                  <td>{bike.price}</td>
                  <td>{bike.supplier}</td>
                  <td>{bike.quantity}</td>
                  <td> <Button variant="danger">Delete</Button></td>
                  
              </tr>)
        }
      </tbody>
    </Table>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyItems;