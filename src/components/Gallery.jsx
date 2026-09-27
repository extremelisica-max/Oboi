import React from 'react'
import Card from './Card'
import sample from '../data/sample'

export default function Gallery(){
  return (
    <section className="gallery container">
      <div className="filters">
        <div className="chips">
          {['Все','Природа','Абстракция','Флора','Геометрия','Текстуры','Мрамор','Детские','Минимализм','Классика'].map(c=> (
            <button key={c} className="chip">{c}</button>
          ))}
        </div>
      </div>

      <div className="pinterest-board">
        {sample.map((s)=> <Card key={s.id} {...s} />)}
      </div>
    </section>
  )
}
