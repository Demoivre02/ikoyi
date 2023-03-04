import React from 'react'

function Image({myWidth,myheight,mysrc}) {

    

  return (
    <div>
        <img 
        className=' p-0 m-0'
        src={mysrc}
        width={myWidth}
        height={myheight}
        loading='lazy'/>
        
    </div>
  )
}

export default Image