import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button, Typography } from "antd";

const Ticket = () => {
  const {Title} = Typography;

  const [numberTicket,setNumberTicket] = useState(null);
  const [email,setEmail] = useState('');

  const handleChangeNumberTicket = (e) => {
    setNumberTicket(e.target.value);
  }
 
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  
  const payClick =() => {
   if(numberTicket !== null && email !==''){
    const logPay = `Đã đăng kí ${numberTicket} vé, tin nhắn sẽ được gửi đến ${email}`;
    console.log(logPay);
   }
  }

  return(
    <div>
      <div style={{display:"flex",textAlign:"center",padding:"0"}}>
      <Title level={3} style={{backgroundColor:"orange" , color:"white",width:"100%"}}>TICKETS</Title>
      </div>   
    <p>Tickets,$3 per one</p>
    <Input placeholder="Enter number you want" onChange={handleChangeNumberTicket}></Input>
    <p>Send to</p>
    <Input placeholder="Enter your email" onChange={handleChangeEmail}></Input>
    <Button style={{backgroundColor:"orange" , color:"black",width:"100%",textAlign:'center',border:'none',margin:'20px 0px'}} onClick={payClick}>PAY</Button>
    <div style={{color:"gray"}}>
    <Button style={{backgroundColor:'gray'}} >CLOSE</Button>
    </div>
    </div> 
    
  )
}

export default Ticket;