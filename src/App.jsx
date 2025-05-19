import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor'
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <>
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  )
}

export default App
