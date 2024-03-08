import React, { useState, useEffect } from 'react'
import { testMerchData } from '../../../__tests__/testMerchData'
import merchImg from '../../../styles/assets/merchImg.png'
import merchImgTall from '../../../styles/assets/merchImgTall.jpg'
import ProductGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { LinkButton, MobileLinkButton } from '../../../styles/styledComponents'
import { Grid } from '@mui/material'

export default function MerchPreview() {
  const [gallery, setGallery] = useState([])
  
  useEffect(() => {
    const formattedProducts = testMerchData.results.map(product => (
      {
        originalTitle: product.name,
        originalAlt: product.slug,
        original: product.images[0].url,
        thumbnail: product.images[0].url,
        originalHeight: 580,
      }
    ))

    setGallery(formattedProducts)
  }, [])

  const handleNav = (e) => {
    const url = `https://dannymullen-shop.fourthwall.com/products/${e.target.attributes[2].nodeValue}`;
    window.location.href = url

    // *** FOR OPENING LINK IN A NEW TAB ***
    // const newTab = window.open(url, "_blank");
    // newTab.focus();
  };

  return (
    <div className='MerchPreview'>
      <h2 className='merch-title'>Featured Merch</h2>
      <h2 className='mobile-merch-title'>Merch</h2>

      <Grid container>
        <Grid item xs={4}>
          <div className='img-container'>
            <img className='merchImg' src={merchImg} alt='merch example' />
            <img className='merchImg-tall' src={merchImgTall} alt='merch example' />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className='gallery-container'>
            <ProductGallery
              items={gallery}
              onClick={handleNav}
              thumbnailPosition='right'
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={5000}
            />
          </div>
          <div className='mobile-gallery-container'>
            <ProductGallery
              items={gallery}
              onClick={handleNav}
              showFullscreenButton={true}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={5000}
            />
          </div>
        </Grid>
      </Grid>

      {/* <div className='merch-container'>
        <div className='img-container'>
          <img className='merchImg' src={merchImg} alt='merch example' />
          <img className='merchImg-tall' src={merchImgTall} alt='merch example' />
        </div>
        <div className='gallery-container'>
          <ProductGallery
            items={gallery}
            onClick={handleNav}
            thumbnailPosition='right'
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>
        <div className='mobile-gallery-container'>
          <ProductGallery
            items={gallery}
            onClick={handleNav}
            showFullscreenButton={true}
            showPlayButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>
      </div> */}
      <div className='link-button-container'>
        <LinkButton disableRipple href='https://dannymullen-shop.fourthwall.com/'>Shop All</LinkButton>
        <MobileLinkButton 
          sx={{ 
            color: '#e1ff00',
            margin: '32px auto 24px',
            '&:hover': { backgroundColor: '#000714' }, 
            '&:active': { color: '#ffffff' } 
          }}
          href='https://dannymullen-shop.fourthwall.com/'
        >Shop All</MobileLinkButton>
      </div>
    </div>
  )
}