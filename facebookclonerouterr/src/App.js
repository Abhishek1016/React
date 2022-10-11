import './App.css';
import Homepage from './pages/Homepage';
import Messagepage from './pages/Messagepage';
import Profilepage from './pages/Profilepage';
import Peoplepage from './pages/Peoplepage';
import Pagenotfound from './pages/Pagenotfound';
import './vector-globe-icon.png'
import Notification from './pages/Notification';
import './leaf.png';
import './message.png';
import './people.png';
import './metalogo.png';
import './fbLogo.png';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <div id='div1'>
           <img src='./fbLogo.png' id='fblogo' alt='no'/>
           <input type='text' placeholder='Search for people,place and things' id='searcharea'/>
        </div>
        <div id='div2'>
        <Link to="/"><img src='./vector-globe-icon.png' id='link1' alt='no'/></Link>
        <Link to="/Messagepage"><img src='./message.png' id='link2' alt='no'/></Link>
        <Link to="/Peoplepage"><img src='./people.png' id='link3' alt='no'/></Link>
        <Link to="/Profilepage"><img src='./leaf.png' id='link4' alt='no'/></Link>
        <Link to="/Notification" id='link5'>🕭</Link>
        </div>
        
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Messagepage' element={<Messagepage/>}/>
        <Route path='/Peoplepage' element={<Peoplepage/>}/>
        <Route path='/Profilepage' element={<Profilepage/>}/>
        <Route path='/Notification' element={<Notification/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      <div id='footer'>
         copyright © 2022 Meta<img src='./metalogo.png' id='metalogo' alt='no'/>
      </div>
    </Router>
  );
}

export default App;
