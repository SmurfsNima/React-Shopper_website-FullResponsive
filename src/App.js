import "./App.css";
import Shop from "./components/pages/shop";
import Product from "./components/pages/product";
import Login from "./components/pages/login";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App px[10%]">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/login" element = {<Login/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
