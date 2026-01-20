import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='spinner'></div>
        <h2 className='loader-text'>FreshBlend</h2>
        <p className='loader-subtitle'>Loading your smoothie paradise...</p>
      </div>
    </div>
  )
}
