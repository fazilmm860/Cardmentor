import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InnerContact = () => {
     
const [formData,setFromData]=useState({
    name:"",
    mobile:""
  });
 
  const handleChange=(e)=>{
    const {id,value}=e.target;
    setFromData({...formData, [id]:value});
  };
  
  const handleSubmit=async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:9999/api/contactform/postform', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
  
      });
  
      if(response.status===200){
       
        console.log('Form Submitted Successfully:',response.data);
        //Reset from fields after successful submission
        setFromData({
          name:'',
          mobile:'',
        });
        toast.success('Form submitted successfully!',{
            position:'top-center',
            theme: "dark",
        });
      }else{
        console.error('Failed to submit form');
      }
    }catch(error){
      console.error('Error submitting form:',error);

      toast.error('Error submitting form!',{
        position:'top-center',
        theme:'dark',
      });
    }
  };
  return (
    <div className="bg-white shadow p-4 rounded-lg mb-4">
       
       <div className="bg-white shadow p-4 rounded-lg mb-4">
         <h2 className="text-xl font-bold mb-2">Contact Us</h2>
         <div className="row">
           <div className="col-md-6">
             <img
               src="data:image/jpeg;base64,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" // Replace with the URL of your image
               alt="Contact"
               className="img-fluid"
             />
           </div>
           <div className="col-md-6">
             <form onSubmit={handleSubmit}>
               <div className="mb-3">
                 <label htmlFor="name" className="form-label">
                   Name
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="mobileNumber" className="form-label">
                   Mobile Number
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="mobile"
                   value={formData.mobile}
                   onChange={handleChange} 
                   required
                 />
               </div>
               <button type="submit" className="btn btn-primary">
                 Submit
               </button>
             </form>
           </div>
         </div>
         <ToastContainer/>
       </div>
       </div>
  )
}

export default InnerContact
