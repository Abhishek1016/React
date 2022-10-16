import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  "./App.css";

const Login=()=>{
const navigate=useNavigate()
 const loginn =()=>{
     localStorage.setItem('login',true)
      navigate('/')
   }
   useEffect(()=>{
    let login =localStorage.getItem('login')
    if(login==="true")
    {
        navigate('/')
    }
   },[])

return(
    <div id="login">
        <center>
        <h1>Loginpage</h1>
            <input type="text" placeholder="Username"/><br/>
            <br/>
            <input type="text" placeholder="Password"/><br/>
            <br/>
           <button onClick={loginn}>Login</button>
        </center>
    </div>
)
};
export default Login