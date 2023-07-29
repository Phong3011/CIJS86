import React, { useState } from "react";
import {Modal} from 'antd';
import './button.css';
import Ticket from "./Ticket";

const Button = () => {
  const [open , setOpen] = useState(false)

  const showModal =() => {
    setOpen(true)
  }

  return(
    <div className="btn-footer">
      <button className="btn-left" onClick={showModal}>Buy Tickets</button>
      <button className="btn-right">Get free</button>
      <Modal open={open} closeIcon={false} footer={null} >
        <Ticket/>
      </Modal>
    </div>
  )
}

export default Button;