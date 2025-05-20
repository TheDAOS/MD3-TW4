import { useState } from 'react';
import './App.css'
import Body from './components/Body'
import NavBar from './components/NavBar'

function App() {
  const [markdown, setMarkdown] = useState('# hello');

  return (
    <>
      <NavBar markdown={markdown}/>
      <Body markdown={markdown} setMarkdown={setMarkdown}/>
    </>
  )
}

export default App
