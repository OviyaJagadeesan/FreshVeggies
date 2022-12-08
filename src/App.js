import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import EditProfile from './Screens/EditProfile';
import Categories from './Screens/Categories';
import Poultry from './Screens/Poultry';
import ProductDetails from './Screens/ProductDetails';
import MyCart from './Screens/MyCart';
import Dairy from "./Screens/Dairy";
import SeaFood from './Screens/SeaFood';
import AllCategories from './Screens/AllCategories';
import AllFarms from './Screens/AllFarms';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/poultry' element={<Poultry/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
        <Route path='/product-details' element={<ProductDetails/>}/>
        <Route path="/mycart" element={<MyCart/>}/>
        <Route path="/dairy" element={<Dairy/>}/>
        <Route path="/seafood" element={<SeaFood/>}/>
        <Route path="/allcategories" element={<AllCategories/>}/>
        <Route path="/allfarms" element={<AllFarms/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
