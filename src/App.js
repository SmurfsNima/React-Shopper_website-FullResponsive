import "./App.css";
import Shop from "./components/pages/shop";
import Product from "./components/pages/product";
import Login from "./components/pages/login";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Shopcategory from "./components/pages/Shopcategory";
import men_banner from './Assets/Assets/banner_mens.png'
import women_banner from './Assets/Assets/banner_women.png'
import kids_banner from './Assets/Assets/banner_kids.png'
function App() {
  return (
    <div className="App px[10%]">
     
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/men" element = {<Shopcategory banner={men_banner} category = 'men'/>} />
          <Route path="/women" element = {<Shopcategory  banner={women_banner} category = 'women'/>} />
          <Route path="/kids" element = {<Shopcategory banner={kids_banner} category = 'kid' />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
