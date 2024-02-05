import React from 'react'
import '../assests/css/home.css'
const CardProvider = () => {
    const card=[
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },  
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku2QWJs3eIScQb0Rb1KCG1xU88EBT0XD_zg&usqp=CAU',
            name:'HDFC BANK',
        },  
  
    ]
  return (
    <>
  
            <section id=" cardProvider" className=" bg-black p-10">
            <div className="flex flex-col items-center justify-center" >
                <div className="cardProvider-header">
                    <h2 className=" cardProvider-title text-white uppercase">Card Mantri </h2>
                    <h5 className=' cardProvider-title'> Top Credit Card Issuers</h5>
                    <span className=" cardProvider-divider"></span>
                    <p className="cardProvider-description">
                    We partner with all major credit card issuers to make sure you see as many great offers as possible. 
                    Select one of the names below to begin your search.
                    </p>
                </div>
            </div>
            <div className="banks">
                    {card.map((item)=>(
                 <div className='flex items-center  bankBoxes'>
                    
                     <div>
                        <img src={item.image}
                             className='bankImage w-8 h-8' />
                    </div>
                    <div className='ml-4 mt-5'>
                     <h6 className='bankName'>{item.name}</h6>
                    </div>
                   
                </div>
                    ))}        
            </div>
            </section>
            

  
    
 

    
    </>
  )
}

export default CardProvider
