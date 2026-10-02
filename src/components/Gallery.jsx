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
      <div className="tabs" role="tablist">
        {['Все','Природа','Абстракция','Флора','Геометрия','Текстуры','Мрамор','Детские','Минимализм','Классика'].map(c => (
          <button key={c} role="tab" aria-selected={c === category} className={`tab ${c === category ? 'active' : ''}`} onClick={() => onSetCategory(c)}>{c}</button>
        ))}
      </div>

      <div className="card-grid" role="list">
        {items.map((s)=> (
          <Card key={s.id} {...s} onOpen={()=> onOpen(s)} />
        ))}
      </div>

      <div ref={sentinelRef} aria-hidden className="infinite-sentinel" />
    </section>
  )
}
