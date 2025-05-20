import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      <Grid size={6} style={{ height: '100%' }}>
        <TextareaAutosize
          value={markdown}
          onChange={handleChange}
          placeholder="Write your Markdown here..."
          style={{ width: '100%', height: '100%', boxSizing: 'border-box', resize: 'none' }}
        />
      </Grid>
      <Grid size={6} style={{ height: '100%', overflow: 'auto' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Grid>
    </Grid>
  )
}

export default App
