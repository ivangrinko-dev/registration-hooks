import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./style.module.css";
import { useState } from "react";
function AuthPage() {

const [obj, setObj] = useState({email:'', password:'', confirmParsword:''})

function isInp(event){
    setObj({...obj, [event.target.name]: event.target.value})
}

function isObj(){
console.log(obj);
}
  return (
    <div className={style.wrapper}>
      <h1>Registration</h1>
      <div>
        <TextField id="standard-basic" name="email" variant="standard" onChange={isInp} />
      </div>
      <div>
        <TextField id="standard-basic" name="password" variant="standard" onChange={isInp}  />
      </div>
      <div>
        <TextField
          id="standard-basic"
          name="confirm password"
          variant="standard"
          onChange={isInp} 
        />
      </div>
      <div>
        <Button onClick={isObj} variant="outlined">SIGN APP</Button>
      </div>
      <div className={style.accaunt}>
        <p>Already have an accaunt</p>
        <div>
          <Button  variant="text">SIGN IN</Button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
