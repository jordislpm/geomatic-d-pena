import ServicesGeneral from '@/components/Services/ServicesGeneral/ServicesGeneral'
import ServicesHero from '@/components/Services/ServicesHero/ServicesHero'
import React from 'react'

function Services({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <ServicesHero/>
    <ServicesGeneral/>
    {children}
    </>
  )
}

export default Services