import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarouselBar from "./components/CarouselBar";
import AboutUs from "./components/AboutUs"; // import AboutUs
import Projects from "./components/Projects"; // Home featured projects
import AllProjects from "./components/AllProjects"; // Full projects page
import Loader from "./components/Loader"; // your loader component
import CACSection from "./components/CACSection";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader duration (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader /> // Show blinking logo loader
      ) : (
        <div>
          <Navbar />
          <Routes>
            {/* Home page */}
            <Route
              path="/"
              element={
                <>
                  <CarouselBar />
                  <Projects />
                  <ServicesSection />
                  <AboutUs /> {/* Add AboutUs here */}
                  <CACSection />
                  <ContactSection />
                  <WhatsappButton />
                  <Footer />
                </>
              }
            />

            {/* All Projects page */}
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
