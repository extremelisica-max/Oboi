import React from 'react'

export default function Hero(){
  return (
    <section className="hero container">
      <div className="hero-copy">
        <h1>Обои, которые создают атмосферу.</h1>
        <p className="lead">Коллекция широкоформатных обоев для современных интерьеров.</p>
        <div className="hero-ctas">
          <button className="primary">Смотреть коллекцию</button>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-image" />
      </div>
    </section>
  )
}
