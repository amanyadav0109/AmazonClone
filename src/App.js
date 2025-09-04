import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import HomeScreen from './Screen/Homescreen/HomeScreen.jsx';
import Cart from './Screen/cart/cart.js';
import {Routes,Route} from 'react-router-dom';
import Products from './Screen/Products/Products.js';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className='app'>
     <Navbar/>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
