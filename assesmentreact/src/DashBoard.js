import Products from "./Dashboard/Product";
import Client from "./Dashboard/Client";
import Revenue from "./Dashboard/Revenue";
import './App.css';
import Logout from "./Logout";

import React from 'react'

 function DashBoard() {
  return (
    <div id="Dashboard">
        <div id="Clientandrevenue">
        <div id="client">
           <h1>Client List</h1>
           <Client/>
        </div>
        <div id="Revenue">
           <h1>Revenue</h1>
           <Revenue/>
        </div>
        </div>
        <div id="product">
        <h1>Top Products</h1>
        <Products/>
        </div>
    </div>
  )
}
export default DashBoard;
