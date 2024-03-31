import React, { useState, useEffect } from 'react'
import useScreenWidth from '../../../utils/customHooks/useScreenWidth'
import axios from 'axios'
import YouTubeVid from 'react-youtube'

export default function LatestVideo() {
  const [latestVideo, setLatestVideo] = useState('')
  const screenWidth = useScreenWidth()

  // useEffect(() => {
  //   axios.get('https://yt.lemnoslife.com/noKey/playlistItems?part=snippet&playlistId=UULFnyxus3H0_-F8Q6gQTkg41g&maxResults=1')
  //   .then(res => {
  //     setLatestVideo(res.data.items[0].snippet.resourceId.videoId)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })
  // }, [])

  const handleVideoPlayerResize = () => {
    if(screenWidth <= 600) {
      return { height: '240', width: '426.67' }
    } else if(screenWidth <= 750) {
      return { height: '300', width: '533.33' }
    } else if(screenWidth <= 900) {
      return { height: '360', width: '640' }
    } else if(screenWidth <= 1200) {
      return { height: '432', width: '768' }
    } else if(screenWidth <= 1350) {
      return { height: '300', width: '533.33' }
    } else if(screenWidth <= 1500) {
      return { height: '332', width: '590.22' }
    } else if(screenWidth <= 1650) {
      return { height: '360', width: '640' }
    } else if(screenWidth <= 1800) {
      return { height: '400', width: '711.11' }
    } else {
      return { height: '432', width: '768' }
    }
  }

  return (
    <div className='LatestVideo'>
      <YouTubeVid videoId={latestVideo} opts={handleVideoPlayerResize()} />
      <h3 className='video-title'>Danny&apos;s Latest YouTube Video</h3>
    </div>
  )
}