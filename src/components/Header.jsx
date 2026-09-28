import React, {useState, useRef, useEffect} from 'react'

export default function Header({onSearch, favCount}){
  const [value, setValue] = useState('')
  const timer = useRef(null)

  useEffect(()=> {
    return ()=> clearTimeout(timer.current)
  },[])

  function handleChange(e){
    const v = e.target.value
    setValue(v)
    clearTimeout(timer.current)
    timer.current = setTimeout(()=> onSearch && onSearch(v), 280)
  }

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
          <img src="/assets/Logo.png" alt="Oboi" className="site-logo" aria-label="Oboi brand" />
        <nav className="nav" aria-label="Main navigation">
          <a href="#catalog">Каталог</a>
          <a>Коллекции</a>
          <a>Для интерьера</a>
          <a>О бренде</a>
        </nav>

        <div className="actions">
          <label className="search-wrap">
            <input aria-label="Поиск" placeholder="Поиск обоев" value={value} onChange={handleChange} />
          </label>
          <button className="icon-btn" aria-label="Избранное">♡<span className="visually-hidden">Избранное</span><span aria-hidden>{favCount||0}</span></button>
          <button className="primary" aria-label="Корзина">Корзина</button>
        </div>
      </div>
    </header>
  )
}
