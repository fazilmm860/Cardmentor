import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser';
import '../assests/css/contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReCAPTCHA from 'react-google-recaptcha'
import About from '../components/About';
import TestiMonials from '../components/TestiMonials/TestiMonial';
import Footer from '../components/Footer/Footer';



   const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add code here to handle form submission (e.g., send data to server)
      };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const cardComparisonRef = useRef();

 const onChange=()=>{
     
 }
  return (
    <>
    <Navbar/>
    <div className="landingPage  bg-black">
            <section id="about" className=" p-12">
            <div className="mt-12" data-aos="fade-up">
                <div className="section-header ">
                    <h2 className="section-title text-white ">Explore Card Mantri </h2>
                    <h5 className='section-title'> We are team of talented Credit card advisors in the market</h5>
                    <span className="section-divider"></span>
                </div>
                </div>
                </section>
     <div className="landingFrom   rounded-md shadow-md "data-aos="zoom-out" >
      <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-orange-500 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">Mobile</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border  border-orange-500 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border  border-orange-500 rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border  border-orange-500 rounded w-full py-2 px-3"
            rows="4"
            required
          ></textarea>
        </div>
        <ReCAPTCHA
            sitekey="6LcnyOsoAAAAABe7l_rYTn_zMzZ_dU811KXU9R0D"
            onChange={onChange}
         />, 
        <button type="submit" className= " landingpagebtn border border-orange-500 text-white  rounded hover:bg-green-700">Submit</button>
      </form>
    </div>
        </div>
     <About/>
    <TestiMonials/>
    <Footer/>
    </>
    
  )
}

export default ContactPage
