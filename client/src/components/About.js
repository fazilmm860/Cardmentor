import React from 'react'
import image1 from '../assests/img/guru.png'
import '../assests/css/home.css'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
const About = () => {
  return (
    <>
        <div className="flex flex-col items-center  justify-center bg-black">
            <section id="about" className=" p-10">
            <div className="flex flex-col items-center justify-center" data-aos="fade-up">
                <div className="section-header">
                    <h2 className="section-title text-white">Meet Card Mentor </h2>
                    <h5 className='section-title'> Your Credit Card Guru !</h5>
                    <span className="section-divider"></span>
                
                </div>

                <Card className="w-full max-w-[50rem] flex-row bg-slate-300">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image1}
          alt="card-image"
          className=""
          width="100%" // Set the desired width here
          height="100%" // Set the desired height here
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="#7ed957"  className="mb-4 uppercase text-green-500">
         Card Mentor
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2 uppercase">
         Unlocking the right card for you...
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
        Card Mentor is our credit card expert to guide you through the world of credit
         cards and help you make the right financial choices.Card Mentor is your trusted 
         companion on your journey to choose the suitable credit cards from the industry, 
         and make your financial life easier and more rewarding..Card Mentor offers types of credit cards.
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2  text-green-500 hover:bg-gray-800
          ">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>

            </div>
            </section>  
        </div>
       
    </>
  
  )
}

export default About
