import React, {useState} from 'react'

export default function Login({onSuccess}){
  const [captcha, setCaptcha] = useState('')
  return (
    <div className="login-screen">
      <div className="login-card container">
        <h3>Вход в ORTOMAX</h3>
        <p className="muted">Вход по улыбке не реализован — введите код для доступа</p>
        <div style={{marginTop:12}}>
          <input placeholder="Введите код" value={captcha} onChange={e=>setCaptcha(e.target.value)} />
        </div>
        <div style={{marginTop:12, display:'flex', gap:8}}>
          <button className="primary" onClick={()=> onSuccess()}>Войти</button>
          <button className="icon-btn" onClick={()=> onSuccess()}>Пропустить</button>
        </div>
      </div>
    </div>
  )
}
