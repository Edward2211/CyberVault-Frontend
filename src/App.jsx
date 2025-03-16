import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/Footer';
import Sponsors from "./components/sponsors/Sponsors";
import LiveEventComponent from './components/events'; 
import TestimonialSection from "./components/Testimonials/TestimonialSection";
import Hero from "./components/Hero/Hero"
import NotFound from "./components/NotFound/notFound";
import About from './components/About/about.jsx';
import RegistrationForm from './components/RegistrationForm/registrationForm.jsx';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Sponsors />
              <LiveEventComponent />
              <TestimonialSection />
            </>
          } />
          {/* <Route path="/form/:formid" element={<RegistrationForm />} /> */}
          <Route path="/form" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
