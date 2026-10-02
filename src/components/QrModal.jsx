import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode'

// Публичный адрес сайта (GitHub Pages). С localhost телефоны других людей не откроют,
// поэтому в этом случае QR ведёт сюда, иначе — на текущий адрес.
const SITE_URL = 'https://extremelisica-max.github.io/Oboi/'

function shareUrl(){
  const {hostname, origin, pathname} = window.location
  if(hostname === 'localhost' || hostname === '127.0.0.1') return SITE_URL
  return origin + pathname
}

export default function QrModal({onClose}){
  const url = shareUrl()
  const [svg, setSvg] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(()=>{
    QRCode.toString(url, {type:'svg', margin:0, errorCorrectionLevel:'M', color:{dark:'#000000', light:'#FFFFFF'}})
      .then(setSvg)
  },[url])

  useEffect(()=>{
    function onKey(e){ if(e.key==='Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  },[onClose])

  async function copy(){
    try { await navigator.clipboard.writeText(url); setCopied(true) } catch { /* нет доступа к буферу */ }
  }

  return (
    <div className="qr-backdrop" onClick={onClose}>
      <div className="qr-dialog" role="dialog" aria-modal="true" aria-labelledby="qr-title" onClick={(e)=> e.stopPropagation()}>
        <button className="qr-close" onClick={onClose} aria-label="Закрыть">
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
        <h2 id="qr-title" className="qr-title">Наведите камеру телефона</h2>
        <div className="qr-code" role="img" aria-label={`QR-код: ${url}`} dangerouslySetInnerHTML={{__html: svg}} />
        <div className="qr-url">{url}</div>
        <button className="qr-copy" onClick={copy}>{copied ? 'Ссылка скопирована' : 'Скопировать ссылку'}</button>
      </div>
    </div>
  )
}
