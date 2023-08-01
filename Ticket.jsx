import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button, Typography } from "antd";

const Ticket = (props) => {
  const {Title} = Typography;
  const {changeModal} = props;

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
    changeModal()
   }
  }

  // const books = [
  //   { title: "The Alchemist", author: "Paulo Coelho", year: 1988, price: 10 },
  //   { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, price: 15 },
  //   { title: "1984", author: "George Orwell", year: 1949, price: 20 },
  //   { title: "Brave New World", author: "Aldous Huxley", year: 1932, price: 5 },
  //   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, price: 25 },
// ];
// const newBooks = books.map((item) => ({newName:`${item.title} ${item.price}`}));
// console.log(newBooks);
// const newFilter = books.filter((item) => {return item.price > 15});
// console.log(newFilter);

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