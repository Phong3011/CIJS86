import React, { useContext } from "react";
import "./Layout.css";
import { TicketContext } from "../../App";
import { Link } from "react-router-dom";

const Layout = () => {
  const {numberProduct} = useContext(TicketContext)
  console.log('numberTicket', numberProduct)
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
          <div className="number">{numberProduct}</div>
        </div>
      </div>
    </div>
    
  );
};

export default Layout;
