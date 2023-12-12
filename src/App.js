import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ContextApi from './Components/ContextApi/contextApi';
import Homepage from './Pages/Homepage/homepage';
import Topbar from './Components/Topbar/TopbarMain/topbar';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import Backdrop from './Components/Backdrop/backdrop';
import { disableScroll } from './Utilities/utilities';
import Footer from './Components/Footer/footer';
import Messanger from './Components/Messanger/messanger';
import UnderTesting from './Pages/UnderTesting/underTesting';
import Spinner from './Components/Spinner/spinner';
const DisplayProduct = lazy(() => import('./Pages/DisplayProduct/displayProduct'));
const Category = lazy(() => import('./Pages/Category/CategoryMain/category'));
const Cart = lazy(() => import('./Pages/Cart/cart'));
const Checkout = lazy(() => import('./Pages/Checkout/checkout'));
const Profile = lazy(() => import('./Pages/Profile/ProfileMain/profileMain'));
const About = lazy(() => import('./Pages/About/about'));

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
      <ContextApi.Provider value={{user, addItem, setAddItem, toggleSidedrawer}}>
        <Backdrop backdrop={backdrop} closeBackdrop={toggleSidedrawer} />
        <Sidedrawer sidedrawer={sidedrawer} />
        <Topbar toggleSidedrawer={toggleSidedrawer} />
        <Messanger />
        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/' element={<UnderTesting />} /> */}
          <Route path='/bag/:categoryId' element={<Suspense fallback={<Spinner spinner={true} />}>
            <Category />
          </Suspense>} />
          <Route path='/bag/:categoryId/:productId' element={<Suspense fallback={<Spinner spinner={true}/>}>
            <DisplayProduct />
          </Suspense>} />
          <Route path='/view-cart' element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Cart />
          </Suspense>} />
          <Route path='/checkout' element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Checkout />
          </Suspense>} />
          <Route path='/profile' element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Profile />
          </Suspense>} />
          <Route path='/about' element={<Suspense fallback={<Spinner spinner={true}/>}>
            <About />
          </Suspense>}/>
        </Routes>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
