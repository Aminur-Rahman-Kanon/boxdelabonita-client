import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import Topbar from './Components/Topbar/topbar';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import Backdrop from './Components/Backdrop/backdrop';
import { disableScroll } from './Utilities/utilities';
import DisplayProduct from './Pages/DisplayProduct/displayProduct';
import Footer from './Components/Footer/footer';

function App() {

  const [sidedrawer, setSidedrawer] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

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
      <Backdrop backdrop={backdrop} closeBackdrop={toggleSidedrawer} />
      <Sidedrawer sidedrawer={sidedrawer}/>
      <Topbar toggleSidedrawer={toggleSidedrawer} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/bag/:categoryId/:productId' element={<DisplayProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
