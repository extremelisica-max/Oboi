import React, {useEffect} from 'react'

export default function ProductModal({item,onClose,onToggleFav,isFav}){
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onClose])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={e=>e.stopPropagation()} style={{width:'100vw',height:'100vh',borderRadius:0}}>
        <div className="modal-media" style={{flex:1}}>
          <img src={item.image} alt={item.title} style={{width:'100%',height:'100%',objectFit:'cover'}} />
        </div>
        <button aria-label="Close" onClick={onClose} style={{position:'fixed',right:20,top:20,zIndex:80,background:'rgba(255,255,255,0.9)',border:'none',padding:8,borderRadius:8}}>✕</button>
      </div>
    </div>
  )
}
