import React,{useRef} from 'react';
import Cardd from './Cardd';
import './scrolling.css'
import Common from './Common';

const Scrolling = () => {

    const cards = [
        {
          id: 1,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/6-1-6.jpg',
          description: 'About Tour Ut eusimod ultricies sollicitudin....',
          date: 'Date 1',
        },
        {
          id: 2,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/08/6-7.jpg',
          description: 'About Tour Ut eusimod ultricies sollicitudin....',
          date: 'Date 2',
        },
        
        {
          id: 2,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/2-1-6.jpg',
          description: 'About Tour Ut eusimod ultricies sollicitudin....',
          date: 'Date 2',
        }
        ,
        {
          id: 2,
          photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/1-1-6.jpg',
          description: 'About Tour Ut eusimod ultricies sollicitudin....',
          date: 'Date 2',
        },
        {
            id: 1,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/6-1-6.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 1',
          },
          {
            id: 2,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/08/6-7.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 2',
          },
          
          {
            id: 2,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/2-1-6.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 2',
          }
          ,
          {
            id: 2,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/1-1-6.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 2',
          },
          {
            id: 1,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/6-1-6.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 1',
          },
          {
            id: 2,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/08/6-7.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 2',
          },
          
          {
            id: 2,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/2-1-6.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 2',
          }
          ,
          {
            id: 2,
            photo: 'https://yahya.xendekweb.com/wp-content/uploads/2018/12/1-1-6.jpg',
            description: 'About Tour Ut eusimod ultricies sollicitudin....',
            date: 'Date 2',
          }
       
      ];
    
      
      const containerRef = useRef(null);
    
      // const handleScrollLeft = () => {
      //   containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
      // };
    
      // const handleScrollRight = () => {
      //   containerRef.current.scrollLeft += containerRef.current.offsetWidth;
      // };
    
  return (
    <div className='bg-white'>
        <Common title="Recently Added Hotels" des="Check Out Our Latest Hotel Additions and Book Your Perfect Stay Today with Yahya Tours Corporation!" />
    <div className="App bg-white py-1 pb-7 px-10 relative">
    <div className="scrolling-container" ref={containerRef}>
      {cards.map((card) => (
        <Cardd key={card.id} photo={card.photo} description={card.description} date={card.date} />
      ))}
    </div>
    <br />
    {/* <button className="scroll-button" onClick={handleScrollLeft}>{'<'}</button>
    <button className="scroll-button" onClick={handleScrollRight}>{'>'}</button> */}
  </div>
  </div>
  );
};

export default Scrolling;
