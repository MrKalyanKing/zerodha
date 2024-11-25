import React, { useEffect, useState } from 'react'
// import { holdings } from './data/data'
import axios from 'axios'
import { VerticalGraph } from './VerticalGraph';
const Holdings = () => {
 
  const [allholding,setallholding]=useState([]);
  const labels=allholding.map((subArray)=>subArray['name'])
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        animations: {
          y: {
            duration: 2000,
            delay: 500
          }
        },
        data: allholding.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  useEffect(()=>{
    axios.get('http://localhost:3002/allholding').then((res)=>{
      console.log(res.data)
      setallholding(res.data)
    })
  },[])
   
   

  return (
    <div className='tables'>
      <div className='holdings mt-4 mb-3 fs-4'>Holdings {allholding.length}</div>
      <table className='table mx-2' style={{width:'750px'}}>
        <thead>
          <tr>
            <th scope='col' >Instrument</th>
            <th scope='col' >Qty</th>
            <th scope='col' >Avg.Cost</th>
            <th scope='col' >LTP</th>
            <th scope='col' >Cur.Val</th>
            <th scope='col' >P&S</th>
            <th scope='col' >Net.chg</th>
            <th scope='col' >Day.chg</th>
          </tr>
        </thead>
          {allholding.map((stock,index)=>{
              const currValue=stock.price * stock.qty;
              const isProfit=currValue-stock.avg*stock.qty>=0.0;
              const profClass=isProfit ? 'profit':'loss';
              const dayClass=stock.isLoss? 'loss':'profit'
              return(
                
            
                  <tr key={index} >
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {(currValue-stock.avg*stock.qty).toFixed(2)}
                    </td>
                    <td>{stock.net}</td>
                    <td className={dayClass} >{stock.day}</td>
                  </tr>
                
                
              )
          })}
      </table>
      <VerticalGraph data={data}/>
    </div>
  )
}

export default Holdings
