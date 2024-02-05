import React, { useState } from 'react';
import '../assests/css/contact.css'
import emailjs from '@emailjs/browser';

const ContactForm = ({ isOpen, closeModal }) => {

const[name,setName]=useState('');
const[number,setNumber]=useState('');
const[email,setEmail]=useState('');
const[message,setMessage]=useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //Your EmailJS service ID, template ID, and Public Key
      const serviceId='service_koc5xc4';
      const templateid='template_sys414l';
      const publicKey = 'h9DlfGnTxRz-Me12f';

      //Create a new object that contains dynamic template params

        const templateParams={
          from_name:name,
          from_number:number,
          from_email:email,
          to_name:"Card Mantri",
          message: message,


        };

        //send the email using Email js
        emailjs.send(serviceId,templateid,templateParams,publicKey)
        .then((response)=>{
          console.log(`Email sent successfully:`, response);
          setName('');
          setNumber('');
          setEmail('');
          setMessage('');
        })
        .catch((error)=>{
          console.error('Error sending email:', error);
        })

  };
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };
  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'} box fixed inset-0 mt-12 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center`} onClick={handleBackgroundClick}>
      <div className="modal-content bg-white p-8 rounded shadow-lg">
        <h2 className="formH2">Contact Us</h2>
        <form className="fomHead" onSubmit={handleSubmit}>
          <div className="mb-4 inputBox">
            <label className='inputSpan'>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className="inputIcon"
              required
            />
          </div>
          <div className="mb-4 inputBox">
            <label className='inputSpan'>Mob-Number</label>
            <input 
              type="text"
              name="number"
              value={number}
              onChange={(e)=> setNumber(e.target.value)}
              className="inputIcon"
              required
            />
          </div>
          <div className="mb-4 inputBox">
            <label className='inputSpan'>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="inputIcon"
              required
            />
          </div>
          <div className="mb-6 inputBox">
            <label className='inputSpan'>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              className="inputIcon "
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className=" formBtn text-white font-bold py-2 px-4 rounded m-5"
            >
              Close
            </button>
            <button
              type="submit"
              className="formBtn text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;