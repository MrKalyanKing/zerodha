import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const Orders = () => {
  const [allOrders,setallOrders]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3002/allorders').then((res)=>{
      setallOrders(res.data)
    })
  },[])
  return (
    <>
    <div className="orders">
      <div className="no-orders">
        {allOrders>0?
            <><p>You haven't placed any orders today</p><Link to={"/"} className="btn">
              Get started
            </Link></>
            :<p></p>
        }

      </div>
    </div>
    <h3>Orders ({allOrders.length}) </h3>
    <table className="table mx-2" style={{width:'750px'}} >
      <thead>
        <th scope="col">Name</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
        <th scope="col">Mode</th>
      </thead>
      {allOrders.map((stock)=>{
        const name=stock.name
        const qty=stock.qty
        const price=stock.price
        const mode=stock.mode
        return(
          <tr>
            <td>{name}</td>
            <td>{qty}</td>
            <td>{price}</td>
            <td>{mode}</td>
          </tr>
        )
      })}
    </table>
    </>
  );
};

export default Orders;
