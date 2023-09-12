import { useCallback, useState } from "react";

import imageSignin from "../../../img/signIn.jpg";
import MissPassword from "./Form/components/MissPassword";
import { CorrectPassword } from "./Form/components/CorrectPassword";


const Signin = (props) => {
  const {setCorrectSignin} = props;
  const [missPassWord,setMissPassWord] = useState(false)
  const renderLogin = useCallback(() => {
    if(missPassWord){
      return <MissPassword  setMissPassWord={setMissPassWord}/>
    }
    return <CorrectPassword setMissPassWord={setMissPassWord} setCorrectSignin={setCorrectSignin} />
    
  },[missPassWord])

  
  return(
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
    <div className="w-2/3">
      <div
        style={{ width:'100%', height: "100vh", backgroundImage: `url(${imageSignin})` }}
      />
    </div> 
      {renderLogin()}
  </div>
  )
};

export default Signin;
