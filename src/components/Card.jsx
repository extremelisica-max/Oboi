import React, {useState} from 'react'

export default function Card({id, title, image, tag, description, onToggleFav, isFav, onOpen}){
  const [imgLoaded, setImgLoaded] = useState(false)
  const handleImgError = (e) => {
    e.currentTarget.src = '/assets/placeholder.png'
    setImgLoaded(true)
  }
  const handleImgLoad = () => setImgLoaded(true)

  return (
    <article className="pin bento" role="listitem" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter') onOpen() }} onClick={onOpen} aria-label={`${title}, ${tag}`}>
      <div className="pin-media">
        <img src={image} alt={title} loading="lazy" onError={handleImgError} onLoad={handleImgLoad} className={imgLoaded? '': 'loading'} style={{display:'block',width:'100%',minHeight: imgLoaded? 'auto' : 220}} />

        <div className="pin-hover">
          <div className="pin-top-actions">
            <button className={`save-btn ${isFav? 'saved':''}`} aria-pressed={isFav} onClick={(e)=>{e.stopPropagation(); onToggleFav(id)}} aria-label={isFav? 'Убрать из избранного' : 'Добавить в избранное'}>{isFav? '♥' : '♡'}</button>
          </div>
        </div>
      </div>

      <div className="pin-body">
        <div className="card-footer" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
          <div style={{flex:1,minWidth:0}}>
            <h4 style={{margin:0,fontSize:14}}>{title}</h4>
            {description && <p className="pin-description" style={{margin:'8px 0 0'}}>{description}</p>}
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <button className="dots-btn" onClick={(e)=>{e.stopPropagation(); /* TODO: menu */}} aria-label="Меню">⋯</button>
          </div>
        </div>
      </div>
    </article>
  )
}
