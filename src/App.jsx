import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor'
import ReactMarkdown from 'react-markdown';
import { Stack } from '@mui/material';
import './App.css'
import Container from '@mui/material/Container';

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <Stack direction="row" spacing={2} justifyContent='space-around'>
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </Stack>
  )
}

export default App
