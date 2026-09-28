import React, { useEffect, useRef } from 'react'
import Card from './Card'

export default function Gallery({items, onLoadMore, onToggleFav, favorites, onOpen, onSetCategory, category}){
  const sentinelRef = useRef(null)

  useEffect(()=>{
    if(!onLoadMore) return
    const el = sentinelRef.current
    if(!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          onLoadMore()
        }
      })
    }, {rootMargin: '300px'})
    obs.observe(el)
    return ()=> obs.disconnect()
  },[onLoadMore])

  return (
    <section className="gallery container">
      <div className="filters">
        <div className="chips">
            {['Все','Природа','Абстракция','Флора','Геометрия','Текстуры','Мрамор','Детские','Минимализм','Классика'].map(c => (
              <button key={c} className={`chip ${c === category ? 'active' : ''}`} onClick={() => onSetCategory(c)}>{c}</button>
            ))}
        </div>
      </div>

      <div className="pinterest-board" role="list">
        {items.map((s)=> (
          <Card key={s.id} {...s} onToggleFav={onToggleFav} isFav={favorites.includes(s.id)} onOpen={()=> onOpen(s)} />
        ))}
      </div>

      <div ref={sentinelRef} aria-hidden className="infinite-sentinel" />

      <div style={{textAlign:'center', marginTop:24}}>
        <button className="primary" onClick={onLoadMore}>Показать ещё</button>
      </div>
    </section>
  )
}
