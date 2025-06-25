import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Country from "./pages/Country/Country";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import CountryDetail from "./pages/CountryDetail/CountryDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/country" element={<Country />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/countrydetail/:cca3" element={<CountryDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
