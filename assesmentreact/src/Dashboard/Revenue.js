import React from "react";
import {useState} from 'react';
function Revenue(){
    const[prod,setprod]=useState([])
    fetch('https://fakestoreapi.com/products/category/electronics').then(response=>response.json()).then(json=>{setprod(json)})
    return(
       <ul>
        {prod.map(prods=>(
           <li key={prods.id}>
               Price : {prods.price} 
           </li>
         
        ))}
       </ul>
    )
}
export default Revenue;