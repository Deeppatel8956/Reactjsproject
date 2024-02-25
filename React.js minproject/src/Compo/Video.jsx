import React from 'react'

export default function Video({videoSrc}) {
  return (
    <div>
        <video loop controls autostart='true' muted autoPlay src={videoSrc} />
    </div>
  )
}
