import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Splash from './components/Splash'
import Login from './components/Login'

export default function App(){
  const [phase, setPhase] = useState('splash') // splash -> login -> ready

  useEffect(()=>{
    if(phase === 'splash'){
      const t = setTimeout(()=> setPhase('login'), 1400)
      return ()=> clearTimeout(t)
    }
  },[phase])

  if(phase === 'splash') return <Splash onSkip={()=> setPhase('login')} />
  if(phase === 'login') return <Login onSuccess={()=> setPhase('ready')} />

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
