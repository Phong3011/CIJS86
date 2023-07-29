import React from "react";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="date-container">
          <p className="date-text">September</p>
          <div className="text-sold">
            <p className="sold-out">Sold out</p>
          </div>
        </div>
        <div className="date-container">
          <p className="date-text">November</p>
          <div className="text-sold">
            <p className="sold-out">Sold out</p>
          </div>
        </div>
        <div className="date-container">
          <p className="date-text">December</p>
          <div className="number">15</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
