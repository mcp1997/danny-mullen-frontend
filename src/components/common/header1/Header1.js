import React from 'react'
import { StyledLink, NavButton, StyledIcon } from '../../../styles/styledComponents'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { SiOnlyfans } from 'react-icons/si'

function Header1() {
  return (
    <div className='Header1'>
      <div className='header-wrapper'>
        <div className='nav-container'>
          <NavButton href='#top'>Home</NavButton>
          <NavButton href='https://dannymullen-shop.fourthwall.com/'>Merch</NavButton>
        </div>
        
        <div className='title'>
          <h1>DANNY MULLEN</h1>
          <div className='socials'>
            <StyledLink to='https://www.youtube.com/c/DannyMullenOfficial'>
              <StyledIcon className='icon' icon={faYoutube} />
            </StyledLink>
            <StyledLink to='https://www.instagram.com/dannymullen'>
              <StyledIcon className='icon' icon={faInstagram} />
            </StyledLink>
            <StyledLink to='https://www.tiktok.com/@dmullclips'>
              <StyledIcon className='icon' icon={faTiktok} />
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
            <StyledLink to=''>
              <SiOnlyfans className='onlyfans-social'/>
            </StyledLink>
          </div>
        </div>
        
        <div className='nav-container'>
          <NavButton href='https://www.youtube.com/c/DannyMullenOfficial?sub_confirmation=1'>Subscribe</NavButton>
          <NavButton href='https://www.patreon.com/DannyMullen'>Patreon</NavButton>
        </div>

        <div className='hamburger-container'>
          <label className='hamburger-menu'>
            <input type='checkbox' />
          </label>
          <aside className='sidebar'>
            <nav>
              <NavButton href='#top'>Home</NavButton>
              <NavButton href='https://dannymullen-shop.fourthwall.com/'>Merch</NavButton>
              <NavButton href='https://www.youtube.com/c/DannyMullenOfficial?sub_confirmation=1'>Subscribe</NavButton>
              <NavButton href='https://www.patreon.com/DannyMullen'>Patreon</NavButton>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  )
}

export { Header1 }