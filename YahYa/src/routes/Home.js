import React from 'react'
import Navbar from '../components/Navbar'
import Herobanner from '../components/Herobanner'
import Footer from '../components/Footer'
import TipsAndArtical from '../components/TipsAndArtical'
import Herobannerf from '../components/Herobannerf'
import Chooseus from '../components/Chooseus'
import Scrolling from '../components/Scrolling'
import Testi from '../components/Testimonal/Testi'
const testimonials = [
    {
      photo: 'photo1.jpg',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      photo: 'photo2.jpg',
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      photo: 'photo2.jpg',
      title: 'Title 3',
      description: 'Description 3',
    },
    {
      photo: 'photo1.jpg',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      photo: 'photo2.jpg',
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      photo: 'photo2.jpg',
      title: 'Title 3',
      description: 'Description 3',
    },
    // Add more testimonial objects here
  ];
function Home() {
  return (
    <div>
      <Navbar/>
      <Herobanner/>
      <Scrolling/>
      <Chooseus/>
      <Testi testimonials={testimonials} />
      <Herobannerf/>
      <TipsAndArtical />
      <Footer/>
    </div>
  )
}

export default Home