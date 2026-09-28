import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Splash from './components/Splash'
import Login from './components/Login'
import ProductModal from './components/ProductModal'
import sample from './data/sample'
import LeftSidebar from './components/LeftSidebar'

export default function App(){
  const [phase, setPhase] = useState('splash') // splash -> login -> ready
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites')||'[]') } catch { return [] }
  })
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Все')
  const [visibleCount, setVisibleCount] = useState(8)
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  useEffect(()=>{
    if(phase === 'splash'){
      const t = setTimeout(()=> setPhase('login'), 1200)
      return ()=> clearTimeout(t)
    }
  },[phase])

  function toggleFav(id){
    setFavorites(f=> f.includes(id) ? f.filter(x=>x!==id) : [...f,id])
  }

  if(phase === 'splash') return <Splash onSkip={()=> setPhase('login')} />
  if(phase === 'login') return <Login onSuccess={()=> setPhase('ready')} />

  const filtered = sample.filter(s=> (category==='Все' || s.tag===category) && s.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="app-shell layout-with-sidebar">
      <LeftSidebar />
      <div className="main-col">
        <Header onSearch={setQuery} favCount={favorites.length} />
        <main>
          <Hero />
          <Gallery
              items={filtered.slice(0, visibleCount)}
            onLoadMore={()=> setVisibleCount(c=> c+8)}
            onToggleFav={toggleFav}
            favorites={favorites}
            onOpen={(item)=> setSelected(item)}
              onSetCategory={setCategory}
              category={category}
          />
        </main>
      </div>
      {selected && <ProductModal item={selected} onClose={()=> setSelected(null)} onToggleFav={toggleFav} isFav={favorites.includes(selected.id)} />}
    </div>
  )
}
