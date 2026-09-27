import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'

export default function App(){
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Gallery />
      </main>
    </div>
  )
}
