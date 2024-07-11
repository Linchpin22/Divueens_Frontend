import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import SignUpPage from "./components/Authenticate/SignUp";
import LoginPage from "./components/Authenticate/login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import TeamSection from "./pages/TeamSection";
import DivueensCSR from "./pages/DivueensCSR";
import BlogHome from "./pages/Blog";
import DivCoins from "./pages/DivCoins";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />     {/* Landing page */}
        <Route path="/products" element={<ProductList />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
        <Route path="/our-team" element={<TeamSection />} />
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
