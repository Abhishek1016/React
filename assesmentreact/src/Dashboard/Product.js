import React from "react";
import {useState} from 'react';
function Products(){
    const[prod,setprod]=useState([])
    fetch('https://fakestoreapi.com/products/category/electronics').then(response=>response.json()).then(json=>{setprod(json)})
    return(
       <ul>
        {prod.map(prods=>(
           <li key={prods.rating}>
               Name:{prods.title} 
           </li>
         
        ))}
       </ul>
    )
}
export default Products;