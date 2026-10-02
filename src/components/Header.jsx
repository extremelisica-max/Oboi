import React, {useState, useRef, useEffect} from 'react'

const base = import.meta.env.BASE_URL

export default function Header({onSearch}){
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
        <img src={`${base}assets/Logo.png`} alt="logo" className="header-logo" />
        <label className="search-wrap">
          <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M15 15l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input className="search-input" aria-label="Поиск" placeholder="Поиск" value={value} onChange={handleChange} />
        </label>
      </div>
    </header>
  )
}
