import React from 'react'
import Card from './Card'

export default function Gallery({items, onLoadMore, onToggleFav, favorites, onOpen, onSetCategory}){
  return (
    <section className="gallery container">
      <div className="filters">
        <div className="chips">
          {['Все','Природа','Абстракция','Флора','Геометрия','Текстуры','Мрамор','Детские','Минимализм','Классика'].map(c=> (
            <button key={c} className="chip" onClick={()=> onSetCategory(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div className="pinterest-board">
        {items.map((s)=> <Card key={s.id} {...s} onToggleFav={onToggleFav} isFav={favorites.includes(s.id)} onOpen={()=> onOpen(s)} />)}
      </div>

      <div style={{textAlign:'center', marginTop:24}}>
        <button className="primary" onClick={onLoadMore}>Показать ещё</button>
      </div>
    </section>
  )
}
