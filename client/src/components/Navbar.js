import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assests/img/title.png';
import '../assests/css/home.css';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = (bank) => {
    setHovered(bank);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  const dropdown = [
    {
      title: 'HDFC Bank',
      cards: ["money Back1", "money Back2", "millenia", "Tata Neo Plus"],
    },
    {
      title: 'IDFC Bank',
      cards: ["money Back1", "money Back2", "millenia", "Tata Neo Plus"],
    },
    {
      title: 'ICICI Bank',
      cards: ["money Back1", "money Back2", "millenia", "Tata Neo Plus"],
    },
    {
      title: 'AXIS Bank',
      cards: ["money Back1", "money Back2", "millenia", "Tata Neo Plus"],
    },
    // Add other items as needed
  ];

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 w-full p-4 text-white ${scrolled ? 'bg-black' : ''}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div id="logo">
            <h1>
              <a href="index.html">
                <img src={logo} style={{ width: '220px', marginLeft: '50px' }} alt="Logo" />
              </a>
            </h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul className="flex space-x-4">
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>

              <li className="dropdown">
                <a href="#">
                  <span>Banks</span> <i><FaChevronDown /></i>
                </a>
                <ul className="hidden">
                  {dropdown.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => handleHover(item.title)}
                      onMouseLeave={handleLeave}
                    >
                      <a href="">{item.title}</a>
                      {hovered === item.title && (
                        <ul>
                          {item.cards.map((card, cardIndex) => (
                            <li key={cardIndex}><a href="">{card}</a></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li><a className="nav-link scrollto" href="/">Membership</a></li>
              <li><a className="nav-link scrollto" href="/">Team</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
