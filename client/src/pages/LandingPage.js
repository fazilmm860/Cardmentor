import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assests/css/home.css'; // Make sure to adjust the path if necessary
import image1 from '../assests/img/product-screen-03.png'
import image2 from '../assests/img/product-screen-04.png'
import image3 from '../assests/img/product-screen-05.png'
import Grid from '../components/Grid';
import HorizontalCard from '../components/HorizontalCard';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import CardComparison from '../components/CardComparison';
import CardProvider from '../components/CardProvider';
import logo from '../assests/img/title.png'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [scrolled, setScrolled] = useState(false);

 

  const cardComparisonRef = useRef();

  const handleCompareButtonClick = () => {
    cardComparisonRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    
      <Navbar/>
      <section id="hero">
      <div className="hero-text" data-aos="zoom-out">
      <h2>Explore Card Mantri</h2>
      <p>We are team of talented Credit card advisors in the market</p>
    <button  className=" btn-get-started scrollto"onClick={handleCompareButtonClick}>Compare cards</button>
    </div>
    <div className="product-screens">
      <div className="product-screen-1" data-aos="fade-up" data-aos-delay="400">
        <img src={image1} className="w-72 h-96" alt="" />
      </div>
      <div className="product-screen-2" data-aos="fade-up" data-aos-delay="200">
        <img src={image2} className="w-72 h-96" alt="" />
      </div>
      <div className="product-screen-3" data-aos="fade-up">
        <img src={image3} className="w-72 h-96" alt="" />
      </div>
    </div>
      </section>

      <main id="main">
       
        <Grid/>
        <About/>


       <CallToAction/>

       <HorizontalCard/>
       
     <CardComparison ref={cardComparisonRef}/>
     <CardProvider/>

<Footer/>

    
    
      </main>

      <footer className="footer">
      <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-lg-start text-center mb-4 lg:mb-0">
          <div className="copyright">
            Copyright &copy; <strong>Fzcreations</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="fzcreator.com">Fzcreators</a>
          </div>
        </div>
        <div className="lg:ml-auto">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" className="scrollto">Home</a>
            <a href="#about" className="scrollto">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
      </footer>

      <a href="https://www.instagram.com/cardmantri_kerala/" 
       className="back-to-top flex items-center justify-center">
      <i className="bi bi-whatsapp"></i>
    </a>
    
    </>
  );
}

export default LandingPage;
