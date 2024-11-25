import React, { useEffect, useState } from 'react'
// import { positions } from './data/data'
import axios from 'axios'
import { VerticalGraph } from './VerticalGraph';

const Positions = () => {

  const [allposition,setallposition]=useState([]);
  useEffect(()=>{
   axios.get('http://localhost:3002/allposition').then((res)=>{
    setallposition(res.data)
   })
  },[])
   
  const labels=allposition.map((subArray)=>subArray['name'])
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Average",
        animations: {
          y: {
            duration: 2000,
            delay: 500
          }
        },
        data: allposition.map((stock) => stock.avg),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className='tables mx-2'>
      <h3 className='mt-4 mb-3'>Positions {allposition.length}</h3>
      <table className='table' style={{width:'750px'}}>
        <thead>
          <tr>
            <th scope='col'  >Product</th>
            <th scope='col'  >Instrument</th>
            <th scope='col'  >Qty</th>
            <th scope='col'  >Avg</th>
            <th scope='col'  >LTP</th>
            <th scope='col'  >P&L</th>
            <th scope='col'  >chg</th>
          </tr>
        </thead>
        {allposition.map((stock,index)=>{
          const currValue=stock.price * stock.qty;
          const isProfit=currValue-stock.avg*stock.qty>=0.0;
          const profClass=isProfit ? 'profit':'loss';
          const dayClass=stock.isLoss? 'loss':'profit';
          return(
            <tr>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg}</td>
              <td className={profClass}>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
              <td>{stock.net}</td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
          )
        })}
      </table>
      <VerticalGraph data={data} />
    </div>
  )
}

export default Positions
