import React from 'react'
import LatestVideo from './LatestVideo'
import LatestShorts from './LatestShorts'
import { StyledH2, LinkButton } from '../../../styles/styledComponents'

export default function YouTubePreview() {
  return (
    <div className='YouTubePreview'>
      <StyledH2 style={{ color: '#d3d3d3', borderBottom: '2px solid #d3d3d3'}}>YouTube Channel</StyledH2>
      
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