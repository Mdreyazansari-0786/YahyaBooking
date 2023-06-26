import React from 'react'
import HeroImage2 from '../components/herobanner/HeroImage2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchList from '../components/Hotel/SearchList';
const imageUrl = 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const altText = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
const heading = 'Book Now'

// import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import { setOptions, Page, Stepper } from '@mobiscroll/react';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
// });


function Hotel() {
  return (
    <div className='bg-white'>
      <Navbar/>
      <HeroImage2 imageUrl={imageUrl} text={altText} heading={heading} />
      <SearchList type="list"/>
      <Footer/>
    </div>
  )
}

export default Hotel