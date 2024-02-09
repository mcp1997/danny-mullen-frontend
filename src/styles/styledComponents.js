import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledH2 = styled('h2')({
  fontFamily: '"Josefin Sans Variable", sans-serif',
  fontSize: '6rem',
  width: 'fit-content',
  margin: '31px auto 32px', /* 31px to account for 1px of padding on parent elements to prevent margin collapsing */
})

const StyledLink = styled(Link)({
  color: 'rgb(225,255,0)',
  textDecoration: 'none',
})

const LinkButton = styled(Button)({
  cursor: 'pointer',
  display: 'inline-block',
  position: 'relative',
  transition: '0.5s',
  fontSize: '4.4rem',
  fontFamily: '"Josefin Sans Variable", sans-serif',
  textTransform: 'lowercase',
  color: '#000714',
  height: '116px',
  
  '&:after': {
    content: '">"',
    position: 'absolute',
    opacity: '0',
    right: '-20px',
    transition: '0.5s',
  },
  
  '&:hover': {
    paddingRight: '60px',
    paddingLeft: '8px',
    backgroundColor: 'rgb(0,0,0,0)',
  },
  
  '&:hover:after': {
    opacity: '1',
    right: '10px',
  },

  '&:active': {
    backgroundColor: 'rgb(0,0,0,0)'
  }
})

const NavButton = styled(Button)({
  // border: '1px solid red',
  position: 'relative',
  color: 'rgb(225,255,0)',
  textDecoration: 'none',
  fontSize: '1.4rem',
  width: 'fit-content',
  
  '&:hover': {
    color: 'rgb(181,205,0)',
    backgroundColor: 'rgb(0,7,20)',
  },
  
  '&:before': {
    content: '""',
    position: 'absolute',
    height: '3px',
    width: '0%',
    top: '80%',
    left: '50%',
    backgroundColor: 'rgb(181,205,0)',
    transform: 'translate(-50%, -50%)',
    transition: '0.2s',
  },
  
  '&:hover:before': {
    width: '100%',
  },

  '@media (max-width: 1200px)': {
    fontSize: '1rem'
  },

  '@media (max-width: 768px)': {
    fontSize: '0.8rem',
    minWidth: '0px',
    padding: '0',

    '&:before': {
      height: '2px',
    }
  }
})

const StyledIcon = styled(FontAwesomeIcon)({
  fontSize: '1.4rem',

  '&:hover': {
    transform: 'scale(1.2)',
    transition: 'all ease 500ms',
    color: 'rgb(181,205,0)',
  },

  '@media (max-width: 1200px)': {
    fontSize: '1.2rem',
  }
})

export { 
  StyledH2, 
  StyledLink, 
  LinkButton, 
  NavButton, 
  StyledIcon 
}