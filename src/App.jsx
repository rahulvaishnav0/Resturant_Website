import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Items from "./pages/Items";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories"; 
import Testimonial from "./pages/Testimonial";
import Services from "./pages/Services";
import Menu from "./pages/Menu"; 


const App = () => {
  return(
  <>

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Menu />} />
      <Route path="/categories" element={<Categories />} />
      <Route path='/testimonials' element={<Testimonial/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/menu' element={<Menu />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </>
);
}
export default App;
      
