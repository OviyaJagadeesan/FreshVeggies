import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import EditProfile from './Screens/EditProfile';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
