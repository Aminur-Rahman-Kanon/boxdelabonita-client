import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContextApi from './Components/ContextApi/contextApi';
import Homepage from './Pages/Homepage/homepage';
import Topbar from './Components/Topbar/TopbarMain/topbar';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import Backdrop from './Components/Backdrop/backdrop';
import { disableScroll } from './Utilities/utilities';
import DisplayProduct from './Pages/DisplayProduct/displayProduct';
import Category from './Pages/Category/CategoryMain/category';
import Footer from './Components/Footer/footer';
import Cart from './Pages/Cart/cart';
import Checkout from './Pages/Checkout/checkout';
import Messanger from './Components/Messanger/messanger';
import ProfileMain from './Pages/Profile/ProfileMain/profileMain';
import UnderTesting from './Pages/UnderTesting/underTesting';

function App() {

  const [sidedrawer, setSidedrawer] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [user, setUser] = useState({});
  const [addItem, setAddItem] = useState(0);

  useEffect(() => {
    if (!user.deviceId){
      fetch('https://boxdelabonita-server-13dd.onrender.com/init-app')
      .then(res => res.json())
      .then(data => {
        if (data.deviceId){
          setUser(data);
        }
      })
      .catch(err => console.log(err));
    }
  }, []);

  //This hook handles scroll disabalities on backdrop toggles
  useEffect(() => {
    if (backdrop) {
      disableScroll();
    }
    else {
      window.onscroll = () => {};
    }
  }, [backdrop])

  const toggleSidedrawer = () => {
    setSidedrawer(sidedrawer => !sidedrawer);
    setBackdrop(backdrop => !backdrop);
  }

  return (
    <div className="App">
      <ContextApi.Provider value={{user, addItem, setAddItem}}>
        <Backdrop backdrop={backdrop} closeBackdrop={toggleSidedrawer} />
        {/* <Sidedrawer sidedrawer={sidedrawer}/> */}
        {/* <Topbar toggleSidedrawer={toggleSidedrawer} /> */}
        {/* <Messanger /> */}
        <Routes>
          {/* <Route path='/' element={<Homepage />} /> */}
          <Route path='/' element={<UnderTesting />} />
          {/* <Route path='/bag/:categoryId' element={<Category />} />
          <Route path='/bag/:categoryId/:productId' element={<DisplayProduct />} />
          <Route path='/view-cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/profile' element={<ProfileMain />} /> */}
        </Routes>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
