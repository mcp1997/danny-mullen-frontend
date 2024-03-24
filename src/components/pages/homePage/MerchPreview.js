import React, { useState, useEffect } from 'react'
import { testMerchData } from '../../../__tests__/testMerchData'
import merchImg from '../../../styles/assets/merchImg.jpg'
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

      <Grid 
        container
        sx={{
          width: '90%',
          margin: '0 auto',
          height: { lg: '510px', xl: '580px' }
        }}
      >
        <Grid 
          item 
          xs={0}
          lg={5}
          sx={{
            height: '100%',
            display: { xs: 'none', lg: 'block' }
          }}
        >
          <img className='merchImg' src={merchImg} alt='merch example' />
        </Grid>
        <Grid 
          item
          xs={12}
          lg={7}
        >
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

      <div className='link-button-container'>
        <LinkButton 
          disableRipple
          sx={{ marginTop: '-4vh' }}
          href='https://dannymullen-shop.fourthwall.com/'
        >Shop All</LinkButton>
        <MobileLinkButton 
          sx={{ 
            color: '#e1ff00',
            margin: '3vh auto',
            '&:hover': { backgroundColor: '#000714' }, 
            '&:active': { color: '#ffffff' } 
          }}
          href='https://dannymullen-shop.fourthwall.com/'
        >Shop All</MobileLinkButton>
      </div>
    </div>
  )
}