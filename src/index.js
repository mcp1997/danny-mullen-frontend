import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './styles/index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource-variable/josefin-sans';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavButton } from './styles/styledComponents';

import { Header1 } from './components/common/header1/Header1';
// import { Header2 } from './components/common/header2/Header2';
import { Footer } from './components/common/Footer'
import HomePage from './components/pages/homePage'

export function App() {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleCheck = checked => {
    if (checked) {
      setShowMobileNav(true) // add element to the DOM, but still invisible
      requestAnimationFrame(() => {
        setVisible(true) // mobile nav fades in and is now visible
      })
    } else {
      setVisible(false) // mobile nav fades out
      setTimeout(() => {
        setShowMobileNav(false) // remove it from the DOM
      }, 200) // same as --animation-timing var found in CSS for the hamburger menu
    }
  }

  return (
    <div className='App'>
      <Header1 handleCheck={handleCheck} />
      {/* <Header2 /> */}

      {
        showMobileNav && (
          <div className={
            `mobile-nav ${visible ? 'visible' : ''}`
          }>
            <div className='mobile-nav-container'>
              <NavButton href='#top'>Home</NavButton>
              <NavButton href='https://dannymullen-shop.fourthwall.com/'>Merch</NavButton>
              <NavButton href='https://www.youtube.com/c/DannyMullenOfficial?sub_confirmation=1'>Subscribe</NavButton>
              <NavButton href='https://www.patreon.com/DannyMullen'>Patreon</NavButton>
            </div>
          </div>
        )
      }

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
