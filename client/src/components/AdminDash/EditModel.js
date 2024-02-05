import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';

const EditModel = ({data,onSave,onCancel}) => {
  
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
     

    const[editedData,setEditedData]=useState(data);
    console.log(data);
  
    const handleInputChange = (event)=>{
        const{name,value}=event.target;
    
        setEditedData((prevFormData)=>({
          ...prevFormData,
          [name]:value,
        }));
      }
    
      const handleArrayInputChange=(type,index,event)=>{
        const {value}= event.target;
    
        setEditedData((prevFormData)=>({
          ...prevFormData,
          [type]:prevFormData[type].map((item,i)=>(i=== index ? value:item)),
        }))
      }
      
        const handleSave=async()=>{
            onSave(editedData)
        };

    return (
        <div className=" top-0 left-0 w-full h-full flex items-center justify-center bg-slate bg-opacity-50 z-50">
        <form className='container ' >
             <div className="mb-3">
               <label htmlFor="cardName" className="form-label"> Credit Card Name</label>
               <input
                 type="text"
                 className="form-control"
                 id="cardName"
                 name="cardName"
                 value={editedData.cardName}
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
               value={editedData.catergory}
               onChange={handleInputChange}
               required
               >
                 {categories.map((item,index)=>(
                   <option key={index} value={item}>{item}</option>
                 ))}
                 
               </select>
             </div>   
       
             <div className="mb-3">
               <label htmlFor="description" className="form-label">Description</label>
               <textarea
                 className="form-control"
                 id="description"
                 name="description"
                 value={editedData.description}
                 onChange={handleInputChange}
                 
               />
             </div>
             <div className="mb-3">
               <label htmlFor="img" className="form-label">image</label>
               <textarea
                 className="form-control"
                 id="img"
                 name="img"
                 value={editedData.img}
                 onChange={handleInputChange}
                 required
               />
             </div>
       
             <div className="mb-3">
               <label className="form-label">Features</label>
               {editedData.features.map((feature, index) => (
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
               {editedData.charge.map((charge, index) => (
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
               {editedData.eligibility.map((eligibility, index) => (
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
               {editedData.document.map((document, index) => (
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
               {editedData.faq.map((faq, index) => (
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
               {editedData.faqAns.map((faqAns, index) => (
                 <input
                   key={index}
                   type="text"
                   className="form-control mb-2"
                   value={faqAns}
                   onChange={(e)=>handleArrayInputChange('faqAns',index,e)}
                  
                 />
               ))}
             </div>
       
             <button type="submit" className="btn btn-primary" onClick={handleSave}>Submit</button>
           </form>
           <ToastContainer/>
           </div>
  )
}

export default EditModel
