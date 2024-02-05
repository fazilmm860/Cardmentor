import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditModel from './EditModel';



const ViewCards = () => {
  const [cardData, setCardData] = useState([]); 
  const [activeTab, setActiveTab] = useState(-1);

  const handleToggle = (idx) => {
    setActiveTab(activeTab === idx ? -1 : idx);
  };

  const renderAccordionItem = (idx, question, answer) => (
    <li key={idx} className="bg-white my-2 shadow-lg">
      <h6
        onClick={() => handleToggle(idx)}
        className="flex flex-row justify-between items-center  p-3 cursor-pointer"
      >
        <span>{question}</span>
        <svg
          className={`fill-current text-orange-700 h-6 w-6 transform transition-transform duration-500 ${
            activeTab === idx ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h6>
      <div
        className="border-l-2 border-orange-600 overflow-hidden max-h-0 duration-500 transition-all"
        style={{ maxHeight: activeTab === idx ? '1000px' : '0' }}
      >
        <p className="p-3 text-gray-900">{answer}</p>
      </div>
    </li>
  );

const fetchData=async()=>{
  try{
    const response=await axios.get(`http://localhost:9999/api/creditcard/getcreditcard`)
    console.log('Fetched Data:', response.data); 
    setCardData(response.data)
   
  }catch(error){
    console.error(`Error in fetching Data:${error}`);
  }
}

// Call the fetchData function once the component mounts
useEffect(() => {
  fetchData();
}, []);
const [editCardData, setEditCardData] = useState(null);

const handleEditClick=(data)=>{
    setEditCardData(data)
}

const handleEdit=async(editedData)=>{
    try {

        const shouldSave=window.confirm("Are you sure?")

        if(shouldSave){
            const response=await axios.put(`http://localhost:9999/api/creditcard/editcard/${editedData._id}`,editedData)
            console.log(response.data);

            const updatedFormData=cardData.map((item)=>
             item._id === editedData._id ? editedData : item
            );

            setCardData(updatedFormData);
            console.log(`Updated successfully:: ${JSON.stringify(updatedFormData)}` );
            setEditCardData(null)
        }




    } catch (error) {
        console.error(`Error in updating data :: ${error}`);
    }
}
const handleEditCancel=()=>{
    setEditCardData(null)
};
const handleDeleteClick=async(itemId)=>{
    try{
        const shouldDelete=window.confirm('Are you sure you want to delet this item?')

        if(shouldDelete){
            const response=await axios.delete(`http://localhost:9999/api/creditcard/delete/${itemId}`);
            console.log(response.data);
            fetchData();
        }
    }catch(error){
        console.error(`Error in deleting data:: ${error}`);
    }
}
useEffect(()=>{
    fetchData()
},[]);
  return (
  <>
  
    <div className="p-6 bg-slate-500">
      {/* Card Section */}
      {Array.isArray(cardData) && cardData.length > 0 ? ( cardData.map((item, index) => (
        <div key={index}>
        <div className="bg-white shadow-orange p-4 rounded-lg mb-4 flex">
        <div className="flex-1 flex">
  {/* Left side for CardName and Description */}
  <div className="flex-1">
    <h2 className="text-xl font-bold mb-2">{item.cardName}</h2>
    <p>{item.description}</p>
    <h5>{item.catergory}</h5>
  </div>
  
  {/* Right side for Image */}
  <div>
    <img src={item.img} className="ml-4" alt={item.cardName} />
  </div>
</div>
</div>
      
      
      {/* Features Section */}
      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Benefits and Features</h2>
        <ul className="list-disc pl-4">
            {item.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
      </div>
     
      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Fees and Charges</h2>
        <ul className="list-disc pl-4">
          {item.charge.map((charge,chargeIndex)=>(
            <li key={chargeIndex}>{charge}</li>
          ))}
          
          {/* Add more charge as needed */}
        </ul>
      </div>

      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Eligibility</h2>
        <ul className="list-disc pl-4">
        {item.eligibility.map((eligible,eligbileIndex)=>(
          <li key={eligbileIndex}>{eligible}</li>
        ))}
          {/* Add more features as needed */}
        </ul>
      </div>

      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Documents</h2>
        <ul className="list-disc pl-4">
        {item.document.map((doc,docIndex)=>(
          <li key={docIndex}>{doc}</li>
        ))}
          {/* Add more features as needed */}
        </ul>
      </div>
      
      <div className="bg-white shadow p-4 rounded-lg mb-4">
      <div className="p- bg-light-blue">
      <div className="flex  items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">FAQ </h2>
          <ul className="flex flex-col">
          {item.faq.map((faq, faqIndex) => (
              <li key={faqIndex}>{renderAccordionItem(faqIndex, faq, item.faqAns[faqIndex])}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      <div>
      <button 
      className='bg-yellow-500 text-white px-4 py-2 rounded-md mr-2'
      type='submit'
      onClick={()=>handleEditClick(item)}
      >Edit</button>
      <button 
      type='submit'
      onClick={()=>handleDeleteClick(item._id)}
      className='bg-red-500 text-white px-4 py-2 rounded-md'>Delete</button>
  </div>
    </div>
    
    </div>
))
      ) : (
        <p>No Data Available</p>
      )

}
</div>
    
    {editCardData && (
        <EditModel
         data={{
            ...editCardData,
         }}
         onSave={handleEdit}
         onCancel={handleEditCancel}
         />
    )}

  </>
  );
};

export default ViewCards;
