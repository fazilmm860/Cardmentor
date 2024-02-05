import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footerz">
  	 <div className="containerz">
  	 	<div className="rowz">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Card shipping</a></li>
  	 				<li><a href="#">Applications</a></li>
  	 				<li><a href="#">Card status</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li><a href="#">Card Mantri</a></li>
  	 				<li><a href="#">+91 80780 90080</a></li>
  	 				<li><a href="#">cardantri@gmail.com</a></li>
  	 				<li><a href="#"></a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i><FaFacebook/></i></a>
  	 				<a href="#"><i><FaTwitter/></i></a>
  	 				<a href="#"><i><FaInstagram/></i></a>
  	 				<a href="#"><i><FaLinkedin/></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer
