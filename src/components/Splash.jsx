import React from 'react'

export default function Splash({onSkip}){
  return (
    <div className="splash-screen" onClick={onSkip}>
      <div className="splash-inner">
        <div className="splash-logo">ORTOMAX</div>
      </div>
    </div>
  )
}
