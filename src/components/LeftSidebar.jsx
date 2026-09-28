import React from 'react'

export default function LeftSidebar(){
  return (
    <aside className="left-sidebar" aria-label="Main sidebar">
      <div className="sidebar-inner">
        <img src="/assets/Logo.png" alt="logo" className="sb-logo" />
        <div className="sb-spacer" />
        <button className="sb-btn" aria-label="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v18" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="sb-btn" aria-label="Collections">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" stroke="#000" strokeWidth="1.6" rx="1"/><rect x="13" y="3" width="8" height="8" stroke="#000" strokeWidth="1.6" rx="1"/></svg>
        </button>
        <div className="sb-spacer" />
      </div>
    </aside>
  )
}
