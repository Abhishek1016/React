import React from "react";
import {useState} from 'react';
function Client(){
    const[items,setitems]=useState([])
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(json=>{setitems(json)})
    return(
       <ul>
        {items.map(item=>(
           <li key={item.id}>
               Name:{item.name} | Email:{item.email}
           </li>
         
        ))}
       </ul>
    )
}
export default Client;