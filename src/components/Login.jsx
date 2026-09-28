import React, {useState, useRef, useEffect} from 'react'

export default function Login({onSuccess}){
  const [captcha, setCaptcha] = useState('')
  const [useCaptcha, setUseCaptcha] = useState(false)
  const [cameraActive, setCameraActive] = useState(false)
  const [detecting, setDetecting] = useState(false)
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  useEffect(()=>{
    return ()=> stopCamera()
  },[])

  function startCamera(){
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      navigator.mediaDevices.getUserMedia({video:{facingMode:'user'}})
        .then(s=>{
          streamRef.current = s
          if(videoRef.current) videoRef.current.srcObject = s
          setCameraActive(true)
        }).catch(()=>{
          setCameraActive(false)
        })
    }
  }

  function stopCamera(){
    if(streamRef.current){
      streamRef.current.getTracks().forEach(t=>t.stop())
      streamRef.current = null
    }
    setCameraActive(false)
  }

  function handleDetect(){
    setDetecting(true)
    // Simulate smile detection delay
    setTimeout(()=>{
      setDetecting(false)
      stopCamera()
      onSuccess()
    }, 1500)
  }

  return (
    <div className="login-screen">
      <div className="login-grid container">
        <div className="smile-card">
          <h3>Вход по улыбке</h3>
          <p className="muted">Разместите лицо в кадре и улыбнитесь — система распознает улыбку.</p>

          <div className="video-wrap">
            {cameraActive ? (
              <video ref={videoRef} autoPlay playsInline muted className="video-preview" />
            ) : (
              <div className="video-placeholder">Камера не активна</div>
            )}
          </div>

          <div className="controls">
            {!cameraActive ? (
              <button className="primary" onClick={startCamera}>Начать по улыбке</button>
            ) : (
              <>
                <button className="primary" onClick={handleDetect} disabled={detecting}>{detecting ? 'Определение...' : 'Определить улыбку'}</button>
                <button className="icon-btn" onClick={stopCamera}>Остановить</button>
              </>
            )}
          </div>
        </div>

        <div className="captcha-card">
          <h4>Или войти по коду</h4>
          <p className="muted">Если вы не хотите использовать камеру, используйте код доступа.</p>
          <input placeholder="Введите код" value={captcha} onChange={e=>setCaptcha(e.target.value)} />
          <div style={{marginTop:12, display:'flex', gap:8}}>
            <button className="primary" onClick={()=> onSuccess()}>Войти</button>
            <button className="icon-btn" onClick={()=> setUseCaptcha(u=>!u)}>{useCaptcha ? 'Скрыть' : 'Показать'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
