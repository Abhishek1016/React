import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Bakerypage from './Pages/bakerypage';
import Thirdpage from './Pages/thirdpage';
import Homepage from './Pages/homepage';
import Profilepage from './Pages/profile';
import Pagenotfoundpage from './Pages/pagenotfound';
import './homeicon.png';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/" id='link1' >Home</Link>
        <Link to="/thirdpage" id='link2'>Thirdpage</Link>
        <Link to="/bakerypage" id='link3'>Bakerypage</Link>
        <Link to="/profile" id='link4'>Profilepage</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/thirdpage' element={<Thirdpage/>}/>
        <Route path='/bakerypage' element={<Bakerypage/>}/>
        <Route path='/profile/:name/:initial' element={<Profilepage/>}/>
        <Route path='*' element={<Pagenotfoundpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
