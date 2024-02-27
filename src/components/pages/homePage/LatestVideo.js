import React, { useState, useEffect } from 'react'
import axios from 'axios'
import YouTubeVid from 'react-youtube'

export default function LatestVideo() {
  const [latestVideo, setLatestVideo] = useState('')

  useEffect(() => {
    axios.get('https://yt.lemnoslife.com/noKey/playlistItems?part=snippet&playlistId=UUnyxus3H0_-F8Q6gQTkg41g&maxResults=1')
    .then(res => {
      setLatestVideo(res.data.items[0].snippet.resourceId.videoId)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  const opts = {
    height: '432',
    width: '768'
  }

  return (
    <div className='LatestVideo'>
      <YouTubeVid videoId={latestVideo} opts={opts} />
      <h3 className='video-title'>Danny&apos;s Latest YouTube Video</h3>
    </div>
  )
}