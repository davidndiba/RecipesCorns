import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./pages/App";
import Login from "./pages/Login";
import RatingForm from "./components/RatingForm";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<App />} />
          <Route path="/rateUs" element={<RatingForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
