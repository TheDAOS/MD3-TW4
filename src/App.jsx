import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor'
import ReactMarkdown from 'react-markdown';
import { Stack } from '@mui/material';
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <Stack direction="row" spacing={2} justifyContent='space-between'>
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Stack>
  )
}

export default App
