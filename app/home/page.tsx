import Hero from '@/components/Home/HomeHero/HomeHero'
import HomeAbout from '@/components/Home/HomeAbout/HomeAbout'
import HomeServiceQuestions from '@/components/Home/HomeServiceQuestions/HomeServiceQuestions'
import HomeServices from '@/components/Home/HomeServices/HomeServices'
import React from 'react'
import HomeReviews from '../../components/Home/HomeReviews/HomeReviews'

function HomeView() {
  return (
    <>
    <Hero/>
    <HomeAbout/>
    <HomeServices/>
    <HomeReviews/>
    <HomeServiceQuestions/>
    </>
  )
}

export default HomeView