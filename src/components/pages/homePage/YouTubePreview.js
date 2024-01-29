import React from 'react'
import LatestVideo from './LatestVideo'
import LatestShorts from './LatestShorts'
import { LinkButton } from '../../../styles/styledComponents'

export default function YouTubePreview() {
  return (
    <div className='YouTubePreview'>
      <div className='vids-title-container'>
        <h2 className='youtube-vids-title'>YouTube Channel</h2>
      </div>
      
      <div className='youtube-vids-container'>
        <LatestVideo />
        <LatestShorts />
      </div>

      <div className='links-container'>
        <LinkButton style={{ color: '#d3d3d3' }} disableRipple href='https://www.youtube.com/@DannyMullenOfficial/videos'>View More</LinkButton>
        <hr style={{ height: '64px' }}/>
        <LinkButton style={{ color: '#d3d3d3' }} disableRipple href='https://www.youtube.com/c/DannyMullenOfficial?sub_confirmation=1'>Subscribe</LinkButton>
      </div>
    </div>
  )
}