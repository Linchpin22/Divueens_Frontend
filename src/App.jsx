import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import TeamSection from "./pages/TeamSection";
import DivueensCSR from "./pages/DivueensCSR";
import BlogHome from "./pages/Blog";
import DivCoins from "./pages/DivCoins";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />     {/* Landing page */}
        <Route path="/products" element={<ProductList />} />

        {/* Login page */}
        <Route path="/login" element={<Auth />} />
        
        {/* Our Team page */}
        <Route path="/ourteam" element={<TeamSection />} />

        {/* CSR page */}
        <Route path="/CSR" element={<DivueensCSR />} />
        <Route path="/coins" element={<DivCoins />} />
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/contact-us" element={<></>} />
        <Route path="/help-center" element={<></>} />
        <Route path="/return-policy" element={<></>} />
        <Route path="/shipping-delivery" element={<></>} />
        <Route path="/sell-on-divueens" element={<></>} />
        <Route path="/privacy-policy" element={<></>} />
        <Route path="/blogs" element={<></>} />
        <Route path="/about-us" element={<></>} />
      </Routes>
      <Footer />
    </>
    // profile page, wishlist, Settings ---(designs ready)
    // 
  );
}

export default App;
