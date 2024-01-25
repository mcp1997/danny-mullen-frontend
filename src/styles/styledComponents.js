import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  position: 'relative',
  color: 'rgb(225,255,0)',
  textDecoration: 'none',
  fontSize: '1.4rem',
  
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
    width: '80%',
  },
})

const StyledIcon = styled(FontAwesomeIcon)({
  fontSize: '1.4rem',
  '&:hover': {
    transform: 'scale(1.2)',
    transition: 'all ease 500ms',
    color: 'rgb(181,205,0)',
  }
})

export { StyledLink, LinkButton, NavButton, StyledIcon }