import React from 'react'
import {HomeIcon, CollectionsIcon, QrIcon} from './NavIcons'

const base = import.meta.env.BASE_URL

export default function LeftSidebar({onShowQr}){
  return (
    <aside className="left-sidebar" aria-label="Main sidebar">
      <div className="sidebar-inner">
        <div className="sb-item">
          <img src={`${base}assets/Logo.png`} alt="logo" className="sb-logo" />
        </div>
        <button className="sb-item sb-btn" aria-label="Home">
          <HomeIcon />
        </button>
        <button className="sb-item sb-btn" aria-label="Collections">
          <CollectionsIcon />
        </button>
        <button className="sb-item sb-btn" aria-label="QR-код сайта" title="QR-код сайта" onClick={onShowQr}>
          <QrIcon />
        </button>
      </div>
    </aside>
  )
}
