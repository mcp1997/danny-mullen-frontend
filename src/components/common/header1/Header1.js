import React from 'react'
import { StyledLink, NavButton, StyledIcon } from '../../../styles/styledComponents'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPatreon } from '@fortawesome/free-brands-svg-icons'
// import { faVimeo } from '@fortawesome/free-brands-svg-icons'

function Header1() {
  return (
    <div className='Header1'>
      
      <NavButton style={{ fontSize: '1.4rem' }} href='#top'>Home</NavButton>
      <NavButton href='https://dannymullen-shop.fourthwall.com/'>Merch</NavButton>
      
      <div className='title'>
        <h1>DANNY MULLEN</h1>
        <div className='socials'>
          <StyledLink to='https://www.youtube.com/c/DannyMullenOfficial'>
            <StyledIcon className='icon' icon={faYoutube} />
          </StyledLink>
          <StyledLink to='https://www.instagram.com/dannymullen'>
            <StyledIcon className='icon' icon={faInstagram} />
          </StyledLink>
          <StyledLink to='https://x.com/Dannymullen'>
            <StyledIcon className='icon' icon={faXTwitter} />
          </StyledLink>
          <StyledLink to='https://www.facebook.com/DannyMullenOfficial'>
            <StyledIcon className='icon' icon={faFacebook} />
          </StyledLink>
          <StyledLink to='https://www.patreon.com/DannyMullen'>
            <StyledIcon className='icon' icon={faPatreon} />
          </StyledLink>
        </div>
      </div>
      
      <NavButton href='https://www.youtube.com/c/DannyMullenOfficial?sub_confirmation=1'>Subscribe</NavButton>
      <NavButton href='https://www.patreon.com/DannyMullen'>Patreon</NavButton>
      
    </div>
  )
}

export { Header1 }