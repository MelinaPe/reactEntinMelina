import React from 'react'
import foforologo from '../assets/logos/logofoforo.png'

const title = () => {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      padding:'1em',
      margin:'1em',
      gap: '1em'
    }}>
     <img src={foforologo}/>
    </div>
  )
}

export default title