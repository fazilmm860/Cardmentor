import React, { useState } from 'react'
import ContactForm from './ContactForm';

 
 const HorizontalCard = () => {
  const[isModalOpen, setIsModalOpen]=useState(false)

  const openModal=()=>{
    setIsModalOpen(true);
  };
  const closeModal=()=>{
    setIsModalOpen(false);
  };
  const card=[
   
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQLiGG8M-a3NQLaepSWgRP8Q6G_32rXo4zw&usqp=CAU",
      heading:'nexa card',
      title:'Lyft launching cross-platform service this week',
      description:'Like so many organizations these days, Autodesk is a company in  transition. ',
     
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQLiGG8M-a3NQLaepSWgRP8Q6G_32rXo4zw&usqp=CAU",
      heading:'axis card',
      title:'Lyft launching cross-platform service this week',
      description:'Like so many organizations these days, Autodesk is a company in  transition. ',
      
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQLiGG8M-a3NQLaepSWgRP8Q6G_32rXo4zw&usqp=CAU",
      heading:'hdfc card',
      title:'Lyft launching cross-platform service this week',
      description:'Like so many organizations these days, Autodesk is a company in  transition.'
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQLiGG8M-a3NQLaepSWgRP8Q6G_32rXo4zw&usqp=CAU",
      heading:'Idfc card',
      title:'Lyft launching cross-platform service this week',
      description:'Like so many organizations these days, Autodesk is a company in  transition. ',
     
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQLiGG8M-a3NQLaepSWgRP8Q6G_32rXo4zw&usqp=CAU",
      heading:'ICICI card',
      title:'Lyft launching cross-platform service this week',
      description:'Like so many organizations these days, Autodesk is a company in  transition. ',
     
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQLiGG8M-a3NQLaepSWgRP8Q6G_32rXo4zw&usqp=CAU",
      heading:'SBI card',
      title:'Lyft launching cross-platform service this week',
      description:'Like so many organizations these days, Autodesk is a company in  transition. ',
      
    },

  ]

  return (
    <>
        <div className="flex flex-col items-center justify-center bg-black ">
          <section id="about" className="section-bg p-10">
            <div className="flex flex-col items-center justify-center " data-aos="fade-up">
              <div className="section-header ">
                  <h2 className="section-title">Most Popular Credit Cards in India </h2>
                  <span className="section-divider"></span>
              
              </div>
            </div>
          </section>
        </div>

              <div className='flex flex-wrap justify-center p-10 bg-black' >
              {card.map((item,index)=>(
                <div className="relative flex flex-col items-center mx-4 mt-12 mb-12  text-black bg-slate-300  shadow-md w-96 rounded-xl bg-clip-border sm:w-72 md:w-96"key={index}style={{ borderRadius: '50px' }}>
              <img 
                src={item.img}
                className="relative grid mx-4 mb-4 -mt-10 overflow-hidden  text-white shadow-lg h-38 place-items-center rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border shadow-orange-500/40">

              </img>
              <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
              
                <h6 className='flex items-center justify-center font-bold'>
                  {item.heading}
                </h6>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
              
                <p>
                  {item.description}
                </p>
              </div>
              <div className="-ml-2.5">
                
              </div>
              </div>
              <div className="p-6 pt-0">
              <a className="inline-block" href="#">
              <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center  text-gray-800 uppercase align-middle transition-all rounded-lg select-none hover:bg-slate-500/10 active:bg-slate-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                </button>
              </a>
              <a className="inline-block" href="#">
                <button
                        onClick={openModal} className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none disabled:pointer-events-none disabled:opacity-50 text-white disabled:shadow-none bg-green-600"                  
                  type="button"                 
                >
                Apply 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                </button>
              </a>

              </div>
              </div>
              ))}
                <ContactForm isOpen={isModalOpen} closeModal={closeModal} />
              </div>
    </>

    
);

 
 }
 
 export default HorizontalCard
 