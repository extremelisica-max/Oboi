import React, {useEffect, useRef} from 'react'

// Иконки из Figma ([d]Menu / [m]Menu), viewBox подогнан под 20×20
const ShareIcon = () => (
  <svg width="20" height="20" viewBox="26 22 20 20" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M36.0009 23.6667C36.4198 23.6667 36.7594 24.0058 36.7594 24.4242V32.6502L39.3175 30.0996C39.6139 29.804 40.0941 29.8044 40.39 30.1006C40.686 30.3967 40.6855 30.8763 40.3891 31.1719L36.5367 35.013C36.2407 35.3082 35.7612 35.3082 35.4651 35.013L31.6128 31.1719C31.3164 30.8763 31.3159 30.3967 31.6118 30.1006C31.9078 29.8044 32.388 29.804 32.6844 30.0996L35.2425 32.6502V24.4242C35.2425 24.0058 35.5821 23.6667 36.0009 23.6667ZM42.7416 33.9397C43.1604 33.9397 43.5 34.2789 43.5 34.6973V37.8018C43.5 38.4607 43.2517 39.1002 42.7981 39.5776C42.3432 40.0564 41.7175 40.3333 41.0562 40.3333H30.9438C30.2825 40.3333 29.6568 40.0564 29.2019 39.5776C28.7483 39.1002 28.5 38.4607 28.5 37.8018L28.5 34.6973C28.5 34.2789 28.8396 33.9397 29.2584 33.9397C29.6773 33.9397 30.0169 34.2789 30.0169 34.6973L30.0169 37.8018C30.0169 38.0838 30.1237 38.3467 30.3022 38.5347C30.4795 38.7213 30.7112 38.8182 30.9438 38.8182H41.0562C41.2888 38.8182 41.5205 38.7213 41.6978 38.5347C41.8763 38.3467 41.9831 38.0838 41.9831 37.8018V34.6973C41.9831 34.2789 42.3227 33.9397 42.7416 33.9397Z"/>
  </svg>
)

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="26 54 20 20" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M34.3146 58.0169C34.0688 58.0169 33.833 58.1145 33.6591 58.2884C33.4853 58.4622 33.3876 58.698 33.3876 58.9438V65.6854C33.3876 65.9312 33.4853 66.167 33.6591 66.3409C33.833 66.5147 34.0688 66.6124 34.3146 66.6124H41.0562C41.302 66.6124 41.5378 66.5147 41.7116 66.3409C41.8855 66.167 41.9831 65.9312 41.9831 65.6854V58.9438C41.9831 58.698 41.8855 58.4622 41.7116 58.2884C41.5378 58.1145 41.302 58.0169 41.0562 58.0169H34.3146ZM40.1292 68.1292H41.0562C41.7043 68.1292 42.3259 67.8717 42.7842 67.4134C43.2425 66.9551 43.5 66.3335 43.5 65.6854V58.9438C43.5 58.2957 43.2425 57.6741 42.7842 57.2158C42.3259 56.7575 41.7043 56.5 41.0562 56.5H34.3146C33.6665 56.5 33.0449 56.7575 32.5866 57.2158C32.1283 57.6741 31.8708 58.2957 31.8708 58.9438V59.8708H30.9438C30.2957 59.8708 29.6741 60.1283 29.2158 60.5866C28.7575 61.0449 28.5 61.6665 28.5 62.3146V69.0562C28.5 69.7043 28.7575 70.3259 29.2158 70.7842C29.6741 71.2425 30.2957 71.5 30.9438 71.5H37.6854C38.3335 71.5 38.9551 71.2425 39.4134 70.7842C39.8717 70.3259 40.1292 69.7043 40.1292 69.0562V68.1292ZM38.6124 68.1292H34.3146C33.6665 68.1292 33.0449 67.8717 32.5866 67.4134C32.1283 66.9551 31.8708 66.3335 31.8708 65.6854V61.3876H30.9438C30.698 61.3876 30.4622 61.4853 30.2884 61.6591C30.1145 61.833 30.0169 62.0688 30.0169 62.3146V69.0562C30.0169 69.302 30.1145 69.5378 30.2884 69.7116C30.4622 69.8855 30.698 69.9831 30.9438 69.9831H37.6854C37.9312 69.9831 38.167 69.8855 38.3409 69.7116C38.5147 69.5378 38.6124 69.302 38.6124 69.0562V68.1292Z"/>
  </svg>
)

export default function CardMenu({title, image, onClose}){
  const ref = useRef(null)
  const link = new URL(image, window.location.href).href

  useEffect(()=>{
    function onDown(e){ if(ref.current && !ref.current.contains(e.target)) onClose() }
    function onKey(e){ if(e.key==='Escape') onClose() }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    ref.current?.querySelector('button')?.focus()
    return ()=>{
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  },[onClose])

  async function share(){
    try {
      if(navigator.share) await navigator.share({title, url: link})
      else await navigator.clipboard.writeText(link)
    } catch { /* пользователь закрыл диалог */ }
    onClose()
  }

  async function copy(){
    try { await navigator.clipboard.writeText(link) } catch { /* нет доступа к буферу */ }
    onClose()
  }

  return (
    <div className="card-menu-root" ref={ref} onClick={(e)=> e.stopPropagation()} onKeyDown={(e)=> e.stopPropagation()}>
      <div className="card-menu-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="card-menu" role="menu">
        <button role="menuitem" className="card-menu-item" onClick={share}><ShareIcon />Поделиться</button>
        <button role="menuitem" className="card-menu-item" onClick={copy}><CopyIcon />Скопировать</button>
      </div>
    </div>
  )
}
