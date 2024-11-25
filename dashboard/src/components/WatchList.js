import React, { useContext, useState } from "react";
import {Tooltip,Grow} from '@mui/material'
import { watchlist } from "./data/data";
import {KeyboardArrowDown,KeyboardArrowUp,MoreHoriz,BarChartOutlined} from '@mui/icons-material';
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div className="watchlist-container mt-3 ">
      <div className="search-container mx-4" style={{width:'100%'}} >
        <input  style={{width:'30vw',fontSize:'15px'}}
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
      
        <span className="counts" style={{color:'magenta'}} > {watchlist.length}/ 50</span>
        <hr/>
      </div>

      <ul className="list" >
        {watchlist.map((stock,index)=>{
          return <WatchListItem stock={stock} key={index} />
        })}
      </ul>
      <hr/>

      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem=({stock})=>{

  const [showWatchListAction,setshowWatchListAction]= useState(false)

  const handleMouseEnter=(e)=>{
    setshowWatchListAction(true)
  }
  const handleMouseLeave=(e)=>{
    setshowWatchListAction(false)
  }

  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown?'down':'up'} >{stock.name}</p>
      </div>
      <div className="iteminfo">
         <span className='percent' >{stock.percent}</span>
         {stock.isDown?
         <KeyboardArrowDown className='down'/>:
         <KeyboardArrowUp className='up'/>
         }
         <span className="price">{stock.price}</span>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  )
}

const WatchListAction=({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return(
    <span className="actions">
      <span>
        <Tooltip title='Buy (B)' placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick} >
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip  title='Sell (s)' placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title='Analytics' placement="top" arrow TransitionComponent={Grow} >
          <button>
            <BarChartOutlined/>
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip title='More ' placement="top" arrow TransitionComponent={Grow}>
          <button> <MoreHoriz/></button>
        </Tooltip>
      </span>
    </span>
  )
  
}