import React from 'react'

export default function Menu({onSelectVideo, videoValues}) {
  return (
    <div>
      <form onClick={(e)=>onSelectVideo(e.target.value)}>
         {videoValues.map((value,i)=>
         <div className='video-input'>
         <input key={i} type='radio' name='src' value={value}/>
         {value}
         </div>
         )}
      </form>

    </div>
  )
}
