import React, { useState } from 'react';
import { FaCheckCircle, FaChevronLeft } from 'react-icons/fa';
import '../assests/css/home.css'
import image1 from '../assests/img/compare.png'

const CardComparison = React.forwardRef((props,ref) => {
  const card=[
    {
      select:'Select'
    },
    {
      select:'Reward Credit Card'
    },
    {
      select:'Fuel Credit Card',
    },
    {
      select:'Cashback Credit Card',
    },
    {
      select:'Travel Credit Card',
    },
    {
      select:'Business Credit Card',
    },
    {
      select:'Co-Branded Credit Card'
    },
    {
      select:'Secured Credit Card',
    },
    {
      select:'Corporate Credit Card',
    },
    {
      select:'Student Credit Card',
    },
    {
      select:'Premium/signature Credit Card',
    },
    {
      select:'Entertainment Credit Card'
    },
    {
      select:'Credit Card For Women',
    },
    {
      select:'Classic Credit Card',
    },
    {
      select:'Titanium Credit Cards',
    },
    {
      select:'Platinum Credit Cards',
    },
  ]
  const [selectedCard1,setSelectedCard1]=useState('');
  const [selectedCard2,setSelectedCard2]=useState('');
  const [showSecondDropdrown,setShowSecondDropdown]=useState(false);

  const handleFirstCardSelect=(event)=>{
    const selectedValue=event.target.value;
    setSelectedCard1(selectedValue);
    setShowSecondDropdown(true);
  }
  const handleSecondCardSelect=(event)=>{
    const selectedValue=event.target.value;
    setSelectedCard2(selectedValue)
  };
  return (
    <>
    <div ref={ref}>
    <section id="about" className="section-bg">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="section-title">COMPARE CARDS</h3>
            <span className="section-divider"></span>
            <p className="section-description">
            Unlocking the Best Credit Card: A Side-by-Side Comparison
            </p>
          </div>

          <div className="flex flex-wrap justify-between"> {/* Added justify-between */}
            <div className="w-full lg:w-6/12 about-img">
              <img src={image1} alt="About Us" />
            </div>

            <div className="w-full lg:w-5/12 content flex justify-between mt-12"> {/* Added flex and justify-between */}
              <ul className="icon-list text-white">
                <li>
                  <i><FaCheckCircle /></i> Cost Reduction: Compare to minimise fees and interest charges.
                </li>
                <li>
                  <i><FaCheckCircle /></i>  Find the card that offers the best rewards for your spending habits.

                </li>
                <li>
                  <i><FaCheckCircle /></i>  Choose a card that aligns with your specific financial needs and goals.

                </li>
                <li>
                  <i></i> <h6 className='cardHead'>Card-1</h6> <h6 className='cardHead2'>Card-2</h6>
                </li>
                <li>
                  <i></i><select className='cardSelect bg-slate-300 'onChange={handleFirstCardSelect}>
                      {card.map((item,index)=>(
                      <option key={index} value={item.select}>{item.select}</option>
                      ))}
                    </select>
                    {/*Show the second dropdown when the first card is selected */}
                    {showSecondDropdrown &&(
                      <select className='cardSelect bg-slate-300' onChange={handleSecondCardSelect}>
                        
                        {card.map((item,index)=>(
                          <option key={index} value={item.select}>{item.select}</option>
                        ))}
                      </select>
                    )}

                    
                                           <img src={image1}
                                                className='cardImage'
                                           ></img>

                     <select className='cardSelect  bg-slate-300'onChange={handleFirstCardSelect}>
                     {card.map((item,index)=>(
                      <option key={index} value={item.select}>{item.select}</option>
                      ))}
                        </select>
                        {showSecondDropdrown &&(
                      <select className='cardSelect bg-slate-300' onChange={handleSecondCardSelect}>
                        <option value=''>Select </option>
                        {card.map((item,index)=>(
                          <option key={index} value={item.select}>{item.select}</option>
                        ))}
                      </select>
                    )}
                </li>
                <li>
                  <i></i> <button className='cardButton '>Compare</button> 
                </li>
                <li></li>
             </ul>                        
            </div>                    
             </div>      
        </div>
        </section>
    </div>
     
    </>
  );
});

export default CardComparison;
