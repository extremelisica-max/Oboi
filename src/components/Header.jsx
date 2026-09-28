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
        <div className="actions">
          <label className="search-wrap" style={{width:'640px'}}>
            <input aria-label="Поиск" placeholder="Поиск обоев" value={value} onChange={handleChange} />
          </label>
        </div>
      </header>
    )
  }
      </div>
    </header>
  )
}
