import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useQuery } from 'react-query';
import ContextApi from './Components/ContextApi/contextApi';
import Homepage from './Pages/Homepage/homepage';
import Topbar from './Components/Topbar/TopbarMain/topbar';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import Backdrop from './Components/Backdrop/backdrop';
import { disableScroll } from './Utilities/utilities';
import Footer from './Components/Footer/footer';
import Messanger from './Components/Messanger/messanger';
import UnderTesting from './Pages/UnderTesting/underTesting';
import DefaultRoute from './Pages/DefaultRoute/defaultRoute';
import Spinner from './Components/Spinner/spinner';
const DisplayProduct = lazy(() => import('./Pages/DisplayProduct/displayProduct'));
const Category = lazy(() => import('./Pages/Category/CategoryMain/category'));
const Cart = lazy(() => import('./Pages/Cart/cart'));
const Checkout = lazy(() => import('./Pages/Checkout/checkout'));
const Profile = lazy(() => import('./Pages/Profile/ProfileMain/profileMain'));
const About = lazy(() => import('./Pages/About/about'));
const LandingPage = lazy(() => import('./Pages/LandingPage/landingPage'));

function App() {

  const [sidedrawer, setSidedrawer] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);
  //Since we store the user added products to the localStorage and adding item to localStorage doesn't rerender.
  //that's why declare a counter variable "addItem" and everytime user add or remove an item from the cart
  //we increment or decrement the value so the App component rerender and so its child and we get the latest value from localStorage
  const [addItem, setAddItem] = useState(0);

  //fetching data from server and storing into memory so the data can be served throught the app
  const { isLoading, error, data } = useQuery({
    queryKey: ['fetchData'],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_BASE_URI}/fetch-all-products`).then((res) => res.json()).then(data => {
        
        if (data.data){
          return data.data;
        }
        else {
          return [];
        }
      }).catch(err => console.log(err))
  })
  //This hook disable scrolls when backdrop is true so user cant scroll in y direction
  useEffect(() => {
    if (backdrop) {
      disableScroll();
    }
    else {
      window.onscroll = () => {};
    }
  }, [backdrop]);

  //this function toggles the sidedrawer on/off so sidedrawer can be displayed or hidden
  const toggleSidedrawer = () => {
    setSidedrawer(sidedrawer => !sidedrawer);
    setToggleCategory(false);
    setToggleShop(false);
  }

  const contextValue = {
    product: {
      isLoading, data
    },
    sidedrawer,
    addItem,
    setAddItem,
    toggleSidedrawer,
    toggleCategory, setToggleCategory,
    toggleShop, setToggleShop
  }

  return (
    <div className="App">
      <ContextApi.Provider value={ contextValue }>
        <Backdrop backdrop={backdrop} closeBackdrop={() => {}} />
        <Sidedrawer />
        <Topbar />
        {/*this component should gives user ability to directly chat up with the admin through fb but not yet implemented*/}
        {/* <Messanger /> */}
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          {/*activate this route and disable all routes when needed undertaking major updates or critical works*/}
          {/* <Route path='/' element={<UnderTesting />} /> */}
          <Route path={'/bag/:categoryId'} element={<Suspense fallback={<Spinner spinner={true} />}>
            <Category />
          </Suspense>} />
          <Route path={'/bag/:categoryId/:productId'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <DisplayProduct />
          </Suspense>} />
          <Route path={'/view-cart'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Cart />
          </Suspense>} />
          <Route path={'/checkout'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Checkout />
          </Suspense>} />
          <Route path={'/profile'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Profile />
          </Suspense>} />
          <Route path={'/profile/:track/:phone'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <Profile />
          </Suspense>} />
          <Route path={'/about'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <About />
          </Suspense>}/>
          <Route path={'/shop'} element={<Suspense fallback={<Spinner spinner={true}/>}>
            <LandingPage />
          </Suspense>}/>
          <Route path={'*'} element={<DefaultRoute />} />
        </Routes>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
