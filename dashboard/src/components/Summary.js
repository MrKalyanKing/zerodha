import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username  mt-4 mx-3">
        <h6>Hi, User!</h6>
        <hr className="divider " style={{width:'700px'}} />
      </div>

      <div className="section mx-3">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 style={{color:'green',fontSize:'50px'}} >3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second mx-3">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span style={{color:'magenta'}}>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section mx-3">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit" style={{color:'green',fontSize:'50px'}}>
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span style={{color:'magenta'}}>31.43k</span>{" "}
            </p>
            <p>
              Investment <span style={{color:'magenta'}}>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
