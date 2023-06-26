import React from 'react'
import HeroImage2 from '../components/herobanner/HeroImage2'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const imageUrl = 'https://plus.unsplash.com/premium_photo-1661288439917-1542b58a962b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
const altText = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
const heading = 'Book Now'
function CartRent() {
  return (
    <div>
      <Navbar/>
      <HeroImage2 imageUrl={imageUrl} text={altText} heading={heading} />
      <Footer/>
    </div>
  )
}

export default CartRent