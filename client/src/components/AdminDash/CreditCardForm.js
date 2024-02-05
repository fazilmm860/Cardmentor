import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreditCardForm = () => {
  const categories = [
    'Select',
    'Reward Credit Card',
    'Fuel Credit Card',
    'Cashback Credit Card',
    'Travel Credit Card',
    'Business Credit Card',
    'Co-Branded Credit Card',
    'Secured Credit Card',
    'Corporate Credit Card',
    'Student Credit Card',
    'Premium Credit Card',
  ];
  const cat=[
    {
      choose:'Select',
    },
    {
      choose:'Reward Credit Card',
    },
    {
      choose:"Fuel Credit Card",
    },
    {
      choose:'Cashback Credit Card',
    },
    {
      choose:'Travel Credit Card',
    },
    {
      choose:'Business Credit Card',
    },
    {
      choose:'Co-Branded Credit Card',
    },
    {
      choose:'Secured Credit Card',
    },
    {
      choose:'Corporate Credit Card',
    },
    {
      choose:'Student Credit Card',
    },
    {
      choose:'Premium Credit Card',
    }
  ]
  const [formData, setFormData] = useState({
   cardName:'',
   catergory:'',
   description:'',
   img:'',
   features: ['', '', '', '', '', '', '', ''],
    eligibility: ['', '', '', '', '', '', '', ''],
    document: ['', '', '', '', ''],
    charge: ['', '', '', '', ''],
    faq: ['', '', '', '', ''],
    faqAns: ['', '', '', '', ''],
  });
  
  const handleInputChange = (event)=>{
    const{name,value}=event.target;

    setFormData((prevFormData)=>({
      ...prevFormData,
      [name]:value,
    }));
  }

  const handleArrayInputChange=(type,index,event)=>{
    const {value}= event.target;

    setFormData((prevFormData)=>({
      ...prevFormData,
      [type]:prevFormData[type].map((item,i)=>(i=== index ? value:item)),
    }))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Validation Check
      if (formData.cardName === '') {
        toast.warning('Please enter the Card Name', { position: 'top-right' });
      } else if (formData.catergory === 'Select') {
        toast.warning('Please Select the Category', { position: 'top-right' });
      } else if (formData.description === '') {
        toast.warning('Please enter the Description', { position: 'top-right' });
      } else if (formData.img === '') {
        toast.warning('Please enter the Image URL', { position: 'top-right' });
      } else if (formData.features.some(feature => feature === '')) {
        toast.warning('Please enter all the Features', { position: 'top-right' });
      } else if (formData.charge.some(charge => charge === '')) {
        toast.warning('Please enter all the Charges', { position: 'top-right' });
      } else if (formData.eligibility.some(eligibility => eligibility === '')) {
        toast.warning('Please enter all the Eligibility', { position: 'top-right' });
      } else if (formData.document.some(document => document === '')) {
        toast.warning('Please enter all the Documents', { position: 'top-right' });
      } else if (formData.faq.some(faq => faq === '')) {
        toast.warning('Please enter all the FAQ Questions', { position: 'top-right' });
      } else if (formData.faqAns.some(faqAns => faqAns === '')) {
        toast.warning('Please enter all the FAQ Answers', { position: 'top-right' });
      } else {
        // Form data is valid, proceed with submission
  
        const response = await axios.post('http://localhost:9999/api/creditcard/postcreditcard', JSON.stringify(formData), {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response && response.data) {
          console.log('Response:', response.data);
  
          if (response.status === 201) {
            console.log(`Data submitted successfully: ${response.data}`);
          }
        } else {
          console.error('Invalid response:', response);
        }
  
        setFormData({
          cardName: '',
          catergory: '',
          description: '',
          img: '',
          features: ['', '', '', '', '', '', '', ''],
          eligibility: ['', '', '', '', '', '', '', ''],
          document: ['', '', '', '', ''],
          charge: ['', '', '', '', ''],
          faq: ['', '', '', '', ''],
          faqAns: ['', '', '', '', ''],
        });
  
        toast.success('Your Form is Successfully Submitted!', {
          position: 'top-center',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      console.error('Response data (if available):', error.response ? error.response.data : 'N/A');
    }
  };
  return (
    <div className="container ">
 <form className='container 'onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="cardName" className="form-label"> Credit Card Name</label>
        <input
          type="text"
          className="form-control"
          id="cardName"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="catergory" className="form-label">Catergory</label>
        <select
        type="text"
        className="form-control"
        id="catergory"
        name="catergory"
        value={formData.catergory}
        onChange={handleInputChange}
        required
        >
          {cat.map((item,index)=>(
            <option key={index} value={item.choose}>{item.choose}</option>
          ))}
          
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">image</label>
        <textarea
          className="form-control"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Features</label>
        {formData.features.map((feature, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={feature}
            onChange={(e) => handleArrayInputChange('features', index, e)}
           
          />
        ))}
      </div>
    

      <div className="mb-3">
        <label className="form-label">charge</label>
        {formData.charge.map((charge, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={charge}
            onChange={(e)=>handleArrayInputChange('charge',index, e)}
            
          />
        ))}
      </div>
      <div className="mb-3">
        <label className="form-label">eligibility</label>
        {formData.eligibility.map((eligibility, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={eligibility}
            onChange={(e)=>handleArrayInputChange('eligibility',index,e)}
            
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">document</label>
        {formData.document.map((document, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={document}
            onChange={(e)=>handleArrayInputChange('document',index,e)}
            
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">FAQ Questions</label>
        {formData.faq.map((faq, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={faq}
            onChange={(e)=>handleArrayInputChange('faq',index,e)}
           
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">FAQ Answers</label>
        {formData.faqAns.map((faqAns, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={faqAns}
            onChange={(e)=>handleArrayInputChange('faqAns',index,e)}
           
          />
        ))}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <ToastContainer/>
    </div>
   
  );
};

export default CreditCardForm;

