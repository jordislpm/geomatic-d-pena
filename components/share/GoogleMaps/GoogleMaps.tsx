import React from 'react'
import { GoogleMapsProps } from '@/types'

function GoogleMaps({height="200", width="200"}:GoogleMapsProps) {
  return (
    <div style={{ width: '100%' }}>
    <iframe
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
      src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=PLAZA%20DEBORAH,%20C.%20Juan%20Pablo%20Duarte%20154,%20Las%20Terrenas%2032000,%20Rep%C3%BAblica%20Dominicana.+(Geomatic%20D'%20pe%C3%B1a)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      allowFullScreen
    ></iframe>
  </div>
  )
}

export default GoogleMaps