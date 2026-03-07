import React from 'react'
import AboutHero from '../component/about/AboutHero'
import OurStory from '../component/about/OurStory'
import OurMission from '../component/about/OurMission'
import StatsSection from '../component/about/StatsSection'
import TeamSection from '../component/about/TeamSection'
import CTASection from '../component/about/CTASection'

const About = () => {
  return (
    <>
    <AboutHero/>
    <OurStory/>
    <StatsSection/>
    <OurMission/>
    <TeamSection/>
    <CTASection/>
    </>
  )
}

export default About