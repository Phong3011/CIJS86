import React, { useContext, useState } from "react";
import Input from "antd/es/input/Input";
import { Button, Spin, Typography } from "antd";
import { TicketContext } from "../../App";

const Ticket = (props) => {
  const { numberProduct, setNumberProduct, setLoading } = useContext(TicketContext);
  const { Title } = Typography;
  const { changeModal } = props;

  const [numberPayTicket, setnumberPayTicket] = useState('');
  const [email, setEmail] = useState("");

  const handleChangenumberPayTicket = (e) => {
    setnumberPayTicket(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const payClick = () => {
    console.log('Numbrer', Number(numberPayTicket))
    if(numberPayTicket.length > 0) {
      if (typeof Number(numberPayTicket) === 'number' && !isNaN(Number(numberPayTicket))) {
        setLoading(true);
        const resultProduct = numberProduct - numberPayTicket;
        if (resultProduct >= 0) {
          setInterval(() => {
            setNumberProduct(resultProduct);
            setLoading(false);
          }, 2000);
          clearInterval();
          changeModal();
        } else {
          alert('Số vé đã hết')
        }
      }else {
        alert('Sai định dạng')
      }
    }
  };

 
  return (
    <div>
      <div style={{ display: "flex", textAlign: "center", padding: "0" }}>
        <Title
          level={3}
          style={{ backgroundColor: "orange", color: "white", width: "100%" }}
        >
          TICKETS
        </Title>
      </div>
      <p>Tickets,$3 per one</p>
      <Input
        placeholder="Enter number you want"
        onChange={handleChangenumberPayTicket}
      ></Input>
      <p>Send to</p>
      <Input
        placeholder="Enter your email"
        onChange={handleChangeEmail}
      ></Input>
      <Button
        style={{
          backgroundColor: "orange",
          color: "black",
          width: "100%",
          textAlign: "center",
          border: "none",
          margin: "20px 0px",
        }}
        onClick={payClick}
      >
        PAY
      </Button>
      <div style={{ color: "gray" }}>
        <Button style={{ backgroundColor: "gray" }} onClick={() => changeModal()}>CLOSE</Button>
      </div>
    </div>
  );
};

export default Ticket;
