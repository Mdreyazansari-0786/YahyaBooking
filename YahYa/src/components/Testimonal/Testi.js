import React,{useRef} from 'react';
import './testi.css'
import TestimonalCard from './TestimonalCard';
import Common from '../Common'

const Testi = () => {

    const cards = [
        {
          id: 1,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/03/6-3-7-150x150.jpg',
          description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
          date: 'Date 1',
        },
        {
          id: 2,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/03/4-4-7-150x150.jpg',
          description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
          date: 'Date 2',
        },
        
        {
          id: 3,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/03/3-3-8-150x150.jpg',
          description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
          date: 'Date 2',
        }
        ,
        {
          id: 4,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/03/4-4-7-150x150.jpg',
          description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
          date: 'Date 2',
        },
        {
            id: 5,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/6-1-6.jpg',
            description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
            date: 'Date 1',
          },
          {
            id: 6,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/03/4-4-7-150x150.jpg',
            description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
            date: 'Date 1',
          },
          {
            id: 7,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/03/4-4-7-150x150.jpg',
            description: 'I recently booked a vacation package through YahYa Tours Corporation and was blown away by the level of service I received. The team was incredibly responsive and helpful in answering all of my questions, and they made the entire booking process seamless. I was also pleasantly surprised by the exclusive gifts I received, including a free room upgrade and a discount on my next booking. I would definitely recommend YahYa Tours Corporation to anyone looking for a stress-free travel experience.',
            date: 'Date 2',
          },
          
          
       
      ];
    
      
      const containerRef = useRef(null);
    
      const handleScrollLeft = () => {
        containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
      };
    
      const handleScrollRight = () => {
        containerRef.current.scrollLeft += containerRef.current.offsetWidth;
      };
    
  return (
    <div className='bg-white'>
        <Common title="Testimonials" des="See What Our Customers Have to Say: Read Our Travel Testimonials and Get Inspired for Your Next Adventure with YahYa Tours Corporation!" />
    <div className="App  bg-white pb-7 px-10 relative">
    <div className="scrolling-container" ref={containerRef}>
      {cards.map((card) => (
        <TestimonalCard key={card.id} photo={card.photo} description={card.description} date={card.date} />
      ))}
    </div>
    <br />
    
  </div>
  <div className='pb-10 flex items-center justify-center space-x-10 px-10'>
    <button className="scroll-button bg-black py-4 px-4" onClick={handleScrollLeft}>{'<'}</button>
    <button className="scroll-button bg-black" onClick={handleScrollRight}>{'>'}</button>
  
  </div>
   </div>
  );
};

export default Testi;
