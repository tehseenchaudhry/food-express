import React from 'react'
import HeroSection from '../component/Home/HeroSection'
import Categories from '../component/Home/Categories'
import HowItWorks from '../component/Home/HowItWorks'
import Testimonials from '../component/Home/Testimonials'
import WhyChooseUs from '../component/Home/WhyChooseUs'
import TodaysSpecials from '../component/Home/TodaysSpecials'

const Home = () => {
  return (
    <>
<HeroSection/>
<Categories/> 
<WhyChooseUs/>
<TodaysSpecials/>
<HowItWorks/>
<Testimonials/>
    </>
  )
}

export default Home