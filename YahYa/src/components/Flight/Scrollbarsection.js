import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flightcard from './Flightcard';
import videos from '../../Data/data';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex",background: "gray",width:'40px',height:'40px',borderRadius:'50%',alignItems:'center',justifyContent:'center' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "gray",width:'40px',height:'40px',borderRadius:'50%',alignItems:'center',justifyContent:'center'}}
        onClick={onClick}
      />
    );
  }



const Scrollbarsection = () => {

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        centerPadding: "60px",
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    console.log(videos);
    return (
        <div className='px-14 py-6 w-[100%]'>
            <Slider {...settings} className='bg-white gap-4 py-4 px-5'>
          {
            videos.map(data=><Flightcard
          title={data.title}
          description={data.description}
          image={data.image}
          key={data.id}
            ></Flightcard>)     
          }
            </Slider>
            
        </div>
    )
}

export default Scrollbarsection
