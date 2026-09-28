import React from 'react'

export default class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = { error: null, info: null }
  }

  componentDidCatch(error, info){
    this.setState({ error, info })
    console.error('ErrorBoundary caught', error, info)
  }

  render(){
    const { error, info } = this.state
    if(error){
      return (
        <div style={{padding:20,fontFamily:'Inter, system-ui, monospace',color:'#111',background:'#fff',minHeight:'100vh'}}>
          <h2 style={{marginTop:0}}>Ошибка приложения</h2>
          <div style={{whiteSpace:'pre-wrap',fontSize:13}}>{String(error && (error.stack || error.message || error))}</div>
          {info && info.componentStack ? (
            <pre style={{whiteSpace:'pre-wrap',marginTop:12}}>{info.componentStack}</pre>
          ) : null}
        </div>
      )
    }
    return this.props.children
  }
}
