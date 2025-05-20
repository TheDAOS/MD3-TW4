import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor'
import ReactMarkdown from 'react-markdown';
import { Grid, Stack } from '@mui/material';
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('');

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      </Grid>
      <Grid size={6}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Grid>
    </Grid>
  )
}

export default App
