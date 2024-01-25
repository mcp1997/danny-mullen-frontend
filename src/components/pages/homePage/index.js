import React from 'react'
import MerchPreview from './MerchPreview'
import YouTubePreview from './YouTubePreview'
import PatreonPreview from './PatreonPreview'


export default function HomePage() {
  return (
    <div className='HomePage'>
      <MerchPreview />
      <YouTubePreview />
      <PatreonPreview />
    </div>
  )
}