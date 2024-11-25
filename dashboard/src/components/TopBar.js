import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="p-container p-0 mx-4">
      <div className="row">
        <div className="col-4  indices-container ">
   
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points" style={{color:'red'}} >{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points" style={{color:'red'}}>{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
   
      <div className="col-8 menu-container">
      <Menu />
      </div>
      </div>
    </div>
  );
};

export default TopBar;
