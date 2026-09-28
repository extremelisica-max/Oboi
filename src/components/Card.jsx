import React from 'react'

export default function Card({id, title, image, tag, description, onToggleFav, isFav, onOpen}){
  const handleImgError = (e) => {
    e.currentTarget.src = '/assets/placeholder.png'
  }

  return (
    <article className="pin bento" role="listitem" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') onOpen() }} onClick={onOpen} aria-label={`${title}, ${tag}`}>
      <div className="pin-media">
        <img src={image} alt={title} loading="lazy" onError={handleImgError} />

        <div className="pin-hover">
          <div className="pin-top-actions">
            <button className={`save-btn ${isFav? 'saved':''}`} aria-pressed={isFav} onClick={(e)=>{e.stopPropagation(); onToggleFav(id)}} aria-label={isFav? 'Убрать из избранного' : 'Добавить в избранное'}>{isFav? '♥' : '♡'}</button>
          </div>
        </div>
      </div>

      <div className="pin-body">
        <div className="card-footer" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
          <div style={{flex:1,minWidth:0}}>
            <h4 style={{margin:0,fontSize:15}}>{title}</h4>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <button className="dots-btn" onClick={(e)=>{e.stopPropagation(); /* TODO: menu */}} aria-label="Меню">⋯</button>
          </div>
        </div>
      </div>
    </article>
  )
}
