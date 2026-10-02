import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'
import ProductModal from './components/ProductModal'
import sample from './data/sample'
import LeftSidebar from './components/LeftSidebar'
import BottomNav from './components/BottomNav'
import QrModal from './components/QrModal'

export default function App(){
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites')||'[]') } catch { return [] }
  })
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Все')
  const [visibleCount, setVisibleCount] = useState(8)
  const [selected, setSelected] = useState(null)
  const [qrOpen, setQrOpen] = useState(false)

  useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },[favorites])

  function toggleFav(id){
    setFavorites(f=> f.includes(id) ? f.filter(x=>x!==id) : [...f,id])
  }

  const filtered = sample.filter(s=> (category==='Все' || s.tag===category) && s.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="app-shell layout-with-sidebar">
      <LeftSidebar onShowQr={()=> setQrOpen(true)} />
      <div className="main-col">
        <Header onSearch={setQuery} favCount={favorites.length} />
        <main>
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
      <BottomNav onShowQr={()=> setQrOpen(true)} />
      {qrOpen && <QrModal onClose={()=> setQrOpen(false)} />}
      {selected && <ProductModal item={selected} onClose={()=> setSelected(null)} onToggleFav={toggleFav} isFav={favorites.includes(selected.id)} />}
    </div>
  )
}
