import React from 'react'
import { StyledH2, LinkButton } from '../../../styles/styledComponents'

export default function OnlyfansPreview() {
  return (
    <div className='OnlyfansPreview'>
      <StyledH2 style={{ color: '#d3d3d3', borderBottom: '2px solid #d3d3d3' }}>OnlyFans</StyledH2>

      <p className='onlyfans-subtitle'>Uncensored. Uncut. Unbelievable.</p>

      <div className='onlyfans-container'>
        <div className='onlyfans-img-container'>
          <img className='onlyfans-img' src='https://picsum.photos/700/400' alt='onlyfans preview' />
        </div>
        <div className='onlyfans-text'>
          <p>All of these OnlyFans stars makin&apos; millions and you thought Danny wouldn&apos;t want a piece of the pie?</p>
          <p className='onlyfans-text-italic'>Please.</p>
        </div>
      </div>

      <div className='onlyfans-link'>
        <LinkButton style={{ color: '#d3d3d3' }} disableRipple>Get in on the Action</LinkButton>
      </div>
    </div>
  )
}

