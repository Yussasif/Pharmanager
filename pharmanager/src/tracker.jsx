import React from "react";

function Tracker(props) {
  return (
    <div className="tracker">
      <div className="commonClass">
        <div className="items">
          <p className="circle">1</p>
          <div className="hr"></div>
          <p className="circle">2</p>
          <div className="hr"></div>
          <p className="circle">3</p>
          <div className="hr"></div>
          <p className="circle">4</p>
          {/* <p className="descr">kyc</p> */}
        </div>

        <div className="itemsT">
          <p className="descr1">Kyc</p>
          <p className="descr">Review</p>
          <p className="descr">Payment</p>
          <p className="descr">Complete</p>
        </div>

        {/* <div className="hr"></div> */}
      </div>

      {/* seperate */}
    </div>
  );
}
export default Tracker;
