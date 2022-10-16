import { useNavigate } from "react-router-dom";

const Logout=()=>{
    const navigate=useNavigate()
    const logout =()=>{
        localStorage.clear()
         navigate('/Login')
      }
      

      return(
        <div>
            <h1>Logoutpage</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Logout;