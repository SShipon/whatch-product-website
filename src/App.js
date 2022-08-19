import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Shared/Header/Header.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import NotFound from "./Shared/NotFound/NotFound.jsx";
import Footer from "./Shared/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
