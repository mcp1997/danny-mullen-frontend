import React from 'react'
import { StyledLink, StyledIcon } from '../../styles/styledComponents'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { SiOnlyfans } from 'react-icons/si'

function Footer() {
  return (
    <div className='Footer'>
      <h2 className='footer-title'>DANNY MULLEN</h2>
      <div className='footer-socials-container'>
        <h3 className='footer-subtitle'>FOLLOW ME</h3>
        <h3 className='mobile-footer-title'>FOLLOW DANNY MULLEN</h3>
        <div className='footer-socials'>
          <StyledLink to='https://www.youtube.com/c/DannyMullenOfficial'>
            <StyledIcon className='icon' icon={faYoutube} />
          </StyledLink>
          <StyledLink to='https://www.instagram.com/dannymullen'>
            <StyledIcon className='icon' icon={faInstagram} />
          </StyledLink>
          <StyledLink to='https://www.tiktok.com/@dmullclips'>
            <StyledIcon className='icon' icon={faTiktok} />
          </StyledLink>
          <StyledLink to='https://twitter.com/Dannymullen'>
            <StyledIcon className='icon' icon={faXTwitter} />
          </StyledLink>
          <StyledLink to='https://www.facebook.com/DannyMullenOfficial'>
            <StyledIcon className='icon' icon={faFacebook} />
          </StyledLink>
          <StyledLink to='https://www.patreon.com/DannyMullen'>
            <StyledIcon className='icon' icon={faPatreon} />
          </StyledLink>
          <StyledLink to=''>
            <SiOnlyfans className='onlyfans-social'/>
          </StyledLink>
        </div>
      </div>
    </div>
  )
}

export { Footer }