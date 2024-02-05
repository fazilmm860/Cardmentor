import React,{useState} from 'react'
import ContactForm from './ContactForm'

const CallToAction=()=>{
  const[isModalOpen, setIsModalOpen]=useState(false)

const openModal=()=>{
  setIsModalOpen(true);
};
const closeModal=()=>{
  setIsModalOpen(false);
};
return (
  <>
   <section id="call-to-action" className="bg-gray-100 py-16">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 lg:text-left text-center mb-8 lg:mb-0">
          <h3 className="text-3xl font-bold mb-4 cta-title ml-2">Call To Action</h3>
          <p className="text-lg text-gray-700 mb-6 cta-text ml-2">
            "Apply now and take advantage of exclusive rewards and benefits with our credit card
            services, act fast to take advantage of this limited time offer."
          </p>
        </div>
        <div className="lg:w-1/3 text-center">
          <a  href="#" onClick={openModal} className="inline-block py-3 px-6  text-white font-bold rounded-full text-lg cta-btn">Call To Action</a>
        </div>
      </div>
    </div>
    <ContactForm isOpen={isModalOpen} closeModal={closeModal} />

  </section>
  </>
)
}

export default CallToAction