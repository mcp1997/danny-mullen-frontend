import React, { useState, useEffect } from 'react'
import useScreenWidth from '../../../utils/customHooks/useScreenWidth'
import axios from 'axios'
import YouTubeShort from 'react-youtube'

export default function LatestShorts() {
  const [latestShorts, setLatestShorts] = useState([])
  const screenWidth = useScreenWidth()

  // useEffect(() => {
  //   axios.get('https://yt.lemnoslife.com/noKey/playlistItems?part=snippet&playlistId=UUSHnyxus3H0_-F8Q6gQTkg41g&maxResults=3')
  //   .then(res => {
  //     const shortsIdArray = []
  //     shortsIdArray.push(res.data.items[0].snippet.resourceId.videoId)
  //     shortsIdArray.push(res.data.items[1].snippet.resourceId.videoId)
  //     shortsIdArray.push(res.data.items[2].snippet.resourceId.videoId)
  //     setLatestShorts(shortsIdArray)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
  // }, [])

  const handleVideoPlayerResize = () => {
    if(screenWidth <= 600) {
      return { height: '', width: '' }
    } else if(screenWidth <= 900) {
      return { height: '', width: '' }
    } else if(screenWidth <= 1200) {
      return { height: '', width: '' }
    } else if(screenWidth <= 1536) {
      return { height: '', width: '' }
    } else {
      return { height: '432', width: '243' }
    }
  }

  const opts = {
    height: '432',
    width: '243'
  }

  return (
    <div className='LatestShorts'>
      <div className='shorts-container'>
        <YouTubeShort videoId={latestShorts[0]} opts={opts} />
        <YouTubeShort videoId={latestShorts[1]} opts={opts} />
        <YouTubeShort videoId={latestShorts[2]} opts={opts} />
      </div>
      <h3 className='shorts-title'>Danny&apos;s Latest Shorts</h3>
    </div>
  )
}

