import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CarouselBar from "./components/CarouselBar";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";
import Loader from "./components/Loader";
import CACSection from "./components/CACSection";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import WhatsappButton from "./components/WhatsappButton";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <CarouselBar />
                  <Projects />
                  <ServicesSection />
                  <AboutUs />
                  <CACSection />
                  <ContactSection />
                </>
              }
            />

            {/* All Projects */}
            <Route path="/projects" element={<AllProjects />} />
          </Routes>

          {/* GLOBAL COMPONENTS */}
          <WhatsappButton />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
