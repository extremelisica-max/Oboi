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
      <div className="login-center">
        <div className="login-box">
          <img src="/assets/logo.png" alt="logo" className="login-logo" />
          <h2 className="login-title">Выберите вариант входа</h2>

          <div className="login-actions">
            <button className="login-btn primary" onClick={() => { startCamera(); }}>{cameraActive ? 'Продолжить по улыбке' : 'Войти по улыбке'}</button>
            <button className="login-btn ghost" onClick={()=> onSuccess()}>Войти по капче</button>
          </div>
        </div>
      </div>
    </div>
  )
}
