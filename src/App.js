import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import Details from './components/details/Details';
import Contactus from './components/details/Contactus';
import Aboutus from './components/details/Aboutus';
import Muiicontact from './components/details/Muiicontact';
import Contactmui from './components/details/Contactmui';
import Mcontact from './components/details/Mcontact';

function App() {
    return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home />}/>
     <Route path='details' element={<Details />}/> 
     <Route path='contact' element={<Contactus />}/> 
     <Route path='about' element={<Aboutus />}/> 
     <Route path='muicontact' element={<Muiicontact />}/> 
     <Route path='contactmui' element={<Contactmui />}/> 
     <Route path='mcontact' element={<Mcontact />}/> 
   </Routes>
   <Footer />
   </>
  );
}

export default App;
