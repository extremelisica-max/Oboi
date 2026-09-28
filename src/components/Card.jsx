import React from 'react'

export default function Card({id, title, image, tag, description, onToggleFav, isFav, onOpen}){
  return (
    <article className="pin bento" role="listitem" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') onOpen() }} onClick={onOpen} aria-label={`${title}, ${tag}`}>
      <div className="pin-media">
        <img src={image} alt={title} loading="lazy" />
        <div className="pin-overlay">
          <button className={`save-btn ${isFav? 'saved':''}`} aria-pressed={isFav} onClick={(e)=>{e.stopPropagation(); onToggleFav(id)}} aria-label={isFav? 'Убрать из избранного' : 'Добавить в избранное'}>{isFav? '♥' : '♡'}</button>
        </div>
      </div>
      <div className="pin-body">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12}}>
          <div style={{flex:1, minWidth:0}}>
            <h4>{title}</h4>
            <p className="pin-description">{description}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8}}>
            <div className="author-row"><span className="author-avatar" aria-hidden></span><span className="author-name">{tag}</span></div>
            <a className="card-link" onClick={(e)=>e.stopPropagation()}>PDF</a>
          </div>
        </div>
      </div>
    </article>
  )
}
