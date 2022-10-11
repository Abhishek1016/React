import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
// const Profilepage=()=>{
//     let navigate=useNavigate();
//     return(
//         <div>
//             <h1>This is profile page </h1>
//             <button onClick={()=>{navigate("/")}}>Home page</button>
//         </div>
//     )
// }
// export default Profilepage;

const Profilepage=()=>{
    let navigate=useNavigate();
    let {name,initial}=useParams();
    return(
        <div>
            <h1>This is the  profile page {name}  {initial} </h1>
            <button onClick={()=>{navigate("/")}}>Home page</button>
        </div>
    )
}
export default Profilepage;

