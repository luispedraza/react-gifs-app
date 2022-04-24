import { imag } from '@tensorflow/tfjs'
import React from 'react'

export default function GifGridItem({title, url}) {
  return (
    <div className='card animate__animated animate__bounceIn'>
        
        <img src={url} alt="gif" />
        <p>{title}</p>
            
    </div>
  )
}
