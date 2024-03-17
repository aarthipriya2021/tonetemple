import { BrowserRouter as Router, Routes,  Switch, Route, BrowserRouter,  } from "react-router-dom";

import "./responsive.css";

import "./components/About.css";
import "./components/Banner.css";
import "./components/BMI.css";
import "./components/ChoseUs.css";
import "./components/Contact.css";
import "./components/Features.css";
import "./components/Footer.css";
import "./components/GymClass.css";
import "./components/MonthlyPlan.css";
import "./components/Navbar.css";
import "./components/PageHeader.css";
import "./components/Services.css";
import "./components/Team.css";
import "./components/Testimonial.css";


import Navbar from "./components/Navbar";
import HomeNav  from "./routes/HomeNav";
import AboutNav from "./routes/AboutNav";
import FeaturesNav from "./routes/FeaturesNav";
import ContactNav from "./routes/ContactNav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeNav />} />
      <Route path="/about" element={<AboutNav />} />
      <Route path="/features" element={<FeaturesNav />} />
      <Route path="/contact" element={<ContactNav />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
