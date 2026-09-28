import React from 'react'

export default function LeftSidebar(){
  return (
    <aside className="left-sidebar" aria-label="Main sidebar">
      <div className="sidebar-inner">
        <img src="/assets/Logo.png" alt="logo" className="sb-logo" />
        <div className="sb-spacer" />
          <button className="sb-btn" aria-label="Home">
            <img src="/assets/home-v2.svg" alt="home" style={{width:28,height:28}} />
          </button>
          <button className="sb-btn" aria-label="Collections">
            <img src="/assets/home-v3.svg" alt="collections" style={{width:28,height:28}} />
          </button>
        <div className="sb-spacer" />
      </div>
    </aside>
  )
}
