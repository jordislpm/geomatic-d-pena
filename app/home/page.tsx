import Hero from '@/components/Home/HomeHero/HomeHero'
import HomeAbout from '@/components/Home/HomeAbout/HomeAbout'
import HomeServiceQuestions from '@/components/Home/HomeServiceQuestions/HomeServiceQuestions'
import HomeServices from '@/components/Home/HomeServices/HomeServices'
import React from 'react'

function HomeView() {
  return (
    <>
    <Hero/>
    <HomeAbout/>
    <HomeServices/>
    <HomeServiceQuestions/>
    </>
  )
}

export default HomeView