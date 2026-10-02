import React from 'react'
import {HomeIcon, CollectionsIcon, QrIcon} from './NavIcons'

// Мобильная навигация вместо левой панели (Figma: [d] Home page, 375px)
export default function BottomNav({onShowQr}){
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <button className="bn-btn" aria-label="Home"><HomeIcon /></button>
      <button className="bn-btn" aria-label="Collections"><CollectionsIcon /></button>
      <button className="bn-btn" aria-label="QR-код сайта" onClick={onShowQr}><QrIcon /></button>
    </nav>
  )
}
