import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reward from '../assests/img/Reward.png'
import business from '../assests/img/Business.png'
import '../assests/css/home.css'
import { Link } from 'react-router-dom';

const gridData = [
  {
    image: require('../assests/img/Reward.png'),
    title: 'Reward Credit Card',
    description: 'Swipe, collect, and experience the rewards of a lifetime.',
    to:'/inner-page'
  },
  {
    image: require('../assests/img/Fuel.png'),
    title: 'Fuel Credit Card',
    description: 'Drive smart, save big and fuel your journey.',
    to:'/inner-page'
  },
  {
    image: require('../assests/img/Cashback.png'),
    title: 'Cashback Credit Card',
    description: 'Spend Wisely, Get Money Back.',
    to:'/inner-page'
  },
  {
      image: require('../assests/img/Travel.png'),
      title: 'Travel Credit Card',
      description: 'Your Ticket to Global Exploration: The Travel Credit Card Way.',
      to:'/inner-page'
  },
  {
      image: require('../assests/img/Business.png'),
      title: 'Business Credit Card',
      description: 'The Credit Card for Entrepreneurs on the Rise.',
      to:'/inner-page'
  },
    {
      image: require('../assests/img/Branded.png'),
      title: 'Co-Branded Credit Card',
      description: ' Experience the Best of Both Worlds with Co-Branded Credit.',
      to:'/inner-page'
    },
    {
      image: require('../assests/img/Secured.png'),
      title: 'Secured Credit Card',
      description: 'Your Trusty Companion on the Path to Financial Freedom.',
      to:'/inner-page'
      
    },
    {
      image: require('../assests/img/Corporate.png'),
      title: 'Corporate Credit Card',
      description: 'Spend Smart, Grow Strong with Corporate Credit.',
      to:'/inner-page'
    },
    {
      image: require('../assests/img/Student.png'),
      title: 'Student Credit Card',
      description: 'Student Credit: Your Bridge to Financial Well-being.',
      to:'/inner-page'
    },
    {
      image: require('../assests/img/Premium.png'),
      title: 'Premium Credit Card',
      description: 'Unlock a World of Prestige and Privilege.',
      to:'/inner-page'
    },
  
    {
      image: require('../assests/img/Entertainment.png'),
      title: 'Entertainment Credit Card',
      description: 'Spend Wisely, Get Money Back.',
      to:'/inner-page'
      },
   
];
const Grid = () => {

 
   const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef(null);

  const gridItemWidth = 260; // Width of each grid item

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? gridData.length - 1 : prevIndex - 1));
    gridRef.current.scrollLeft -= gridItemWidth;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === gridData.length - 1 ? 0 : prevIndex + 1));
    gridRef.current.scrollLeft += gridItemWidth;
  };
 
  return (
<div className="p-8 flex justify-center items-center bg-black bg-opacity-100 ">
      <button onClick={handlePrev}  className="p-2  fon"   ><FaChevronLeft/></button> 
      <div ref={gridRef} className=" flex overflow-x-hidden  space-x-2 ">
     
        {gridData.map((item, index) => (
          <div
            key={index}
            className={`gridcard flex-shrink-0 w-64   bg-gray-200 border  p-6 hover:scale-105 transition-transform duration-300  rounded-[25px]`}
          >
            <img
            src={item.image}
            alt={`Block ${index + 1}`}
            className="w-full h-32 object-cover mb-2 rounded-[25px]"
          />            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p>{item.description}</p>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
      <Link to={`/inner-page/${item.title}`}>
        <span>
          learn More
        </span>
        </Link>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
          </div>
        ))}
      </div>
      <button onClick={handleNext}  className="p-2 fon"><FaChevronRight/></button>
     
    </div>
  );
};

export default Grid;