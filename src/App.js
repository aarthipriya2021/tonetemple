import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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


import Navbar from "./routes/HomeNav";
import HomeNav  from "./routes/HomeNav";
import AboutNav from "./routes/AboutNav";
import FeaturesNav from "./routes/FeaturesNav";
import ContactNav from "./routes/ContactNav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={<HomeNav />}></Route>
        <Route exact  path="/about" component={<AboutNav />}></Route>
        <Route exact  path="/features" component={<FeaturesNav />}></Route>
        <Route exact  path="/contact" component={<ContactNav />}></Route>
        <Route />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
