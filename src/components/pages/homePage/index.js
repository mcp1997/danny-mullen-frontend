import React from 'react'
import MerchPreview from './MerchPreview'
import YouTubePreview from './YouTubePreview'
import PatreonPreview from './PatreonPreview'
import OnlyfansPreview from './OnlyfansPreview'

export default function HomePage() {
  return (
    <div className='HomePage'>
      <MerchPreview />
      <YouTubePreview />
      <PatreonPreview />
      <OnlyfansPreview />
    </div>
  )
}