import React, {useState, useCallback} from 'react'
import CardMenu from './CardMenu'

const placeholder = `${import.meta.env.BASE_URL}assets/placeholder.png`

export default function Card({title, image, tag, onOpen}){
  const [imgLoaded, setImgLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(()=> setMenuOpen(false), [])
  const handleImgError = (e) => {
    e.currentTarget.src = placeholder
    setImgLoaded(true)
  }
  const handleImgLoad = () => setImgLoaded(true)

  return (
    <article className="card" role="listitem" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter' && e.target===e.currentTarget) onOpen() }} onClick={onOpen} aria-label={`${title}, ${tag}`}>
      <div className="card-media">
        <img src={image} alt={title} loading="lazy" onError={handleImgError} onLoad={handleImgLoad} className={imgLoaded? '': 'loading'} />
      </div>

      <div className="card-footer">
        <h4 className="card-title">{title}</h4>
        <button className="dots-btn" onPointerDown={(e)=> menuOpen && e.stopPropagation()} onClick={(e)=>{e.stopPropagation(); setMenuOpen(o=> !o)}} aria-label="Меню" aria-haspopup="menu" aria-expanded={menuOpen}>
          <svg width="16" height="4" viewBox="0 0 16 4" aria-hidden="true"><circle cx="2" cy="2" r="2"/><circle cx="8" cy="2" r="2"/><circle cx="14" cy="2" r="2"/></svg>
        </button>
        {menuOpen && <CardMenu title={title} image={image} onClose={closeMenu} />}
      </div>
    </article>
  )
}
