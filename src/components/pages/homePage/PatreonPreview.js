import React from 'react'
import { LinkButton } from '../../../styles/styledComponents'
import patreonThumb1 from '../../../styles/assets/dotathumb.jpg'
import patreonThumb2 from '../../../styles/assets/vegasthumb2.jpg'
import patreonThumb3 from '../../../styles/assets/mimethumb3.jpg'

export default function PatreonPreview() {
  return (
    <div className='PatreonPreview'>
      <div className='patreon-title-container'>
        <h2 className='patreon-title'>Patreon</h2>
      </div>
      <h3 className='patreon-subtitle'>Join Danny&apos;s Patreon to gain access to exclusive content</h3>
      <div className='patreon-image-container'>
        <div className='patreon-image-background'>
          <img src={patreonThumb1} alt='patreon preview photo' />
        </div>
        <div className='patreon-image-background'>
          <img src={patreonThumb2} alt='patreon preview photo' />
        </div>
        <div className='patreon-image-background'>
          <img src={patreonThumb3} alt='patreon preview photo' />
        </div>
      </div>

      <div className='patreon-link'>
        <LinkButton href='https://www.patreon.com/DannyMullen/membership' disableRipple>Become a Member</LinkButton>
      </div>
    </div>
  )
}