import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">Oboi</div>
        <nav className="nav">
          <a>Каталог</a>
          <a>Коллекции</a>
          <a>Для интерьера</a>
          <a>О бренде</a>
        </nav>
        <div className="actions">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">♡</button>
          <button className="primary">Корзина</button>
        </div>
      </div>
    </header>
  )
}
