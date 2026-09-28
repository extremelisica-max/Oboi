import React from 'react'

export default function LeftSidebar(){
  return (
    <aside className="left-sidebar" aria-label="Main sidebar">
      <div className="sidebar-inner">
        <button className="sb-btn" aria-label="Home">P</button>
        <button className="sb-btn" aria-label="Collections">▦</button>
        <button className="sb-btn" aria-label="Create">＋</button>
        <button className="sb-btn" aria-label="Notifications">🔔</button>
        <button className="sb-btn" aria-label="Profile">☺</button>
      </div>
    </aside>
  )
}
