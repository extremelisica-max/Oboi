import React from 'react'

export default function Card({id, title, image, tag, description, onToggleFav, isFav, onOpen}){
  return (
    <article className="pin bento" onClick={onOpen}>
      <div className="pin-media">
        <img src={image} alt={title} loading="lazy" />
        <div className="pin-overlay">
          <button className={`save-btn ${isFav? 'saved':''}`} aria-pressed={isFav} onClick={(e)=>{e.stopPropagation(); onToggleFav(id)}}>{isFav? '♥' : '♡'}</button>
        </div>
      </div>
      <div className="pin-body">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:12}}>
          <div style={{flex:1, minWidth:0}}>
            <h4>{title}</h4>
            <p className="pin-description">{description}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8}}>
            <div className="author-row"><span className="author-avatar"></span><span className="author-name">{tag}</span></div>
            <a className="card-link">PDF</a>
          </div>
        </div>
      </div>
    </article>
  )
}
