import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Login from './Login';
import Protected from './Protected';
import Logout from './Logout';
import DashBoard from './DashBoard';


function App() {
  return (
    <Router>
    <nav>
      <div>
      <Link to="/Logout" id='link6'>Logout</Link>
      </div>
      
    </nav>
    <Routes>
      <Route path='/' element={<Protected Component={DashBoard}/>}/>
      <Route id='loginroute' path='/Login' element={<Login/>}/>
      <Route path='/Logout' element={<Logout/>}/>
    </Routes>
  </Router>
  );
}

export default App;
