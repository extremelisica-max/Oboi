import React from 'react'

export default function ProductModal({item,onClose,onToggleFav,isFav}){
  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onClose])

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="modal-media"><img src={item.image} alt={item.title} /></div>
        <div className="modal-body">
          <h2>{item.title}</h2>
          <div className="meta">{item.tag} — €89 / рулон</div>
          <p style={{marginTop:12}}>{item.description}</p>
          <div style={{marginTop:16,display:'flex',gap:8}}>
            <button className="primary">Добавить в корзину</button>
            <button className="icon-btn" onClick={()=> onToggleFav(item.id)} aria-pressed={isFav}>{isFav? '♥' : '♡'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
