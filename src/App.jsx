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
    <Grid container spacing={2}>
      <Grid size={6}>
        <TextareaAutosize
          value={markdown}
          onChange={handleChange}
          placeholder="Write your Markdown here..."
        />
      </Grid>
      <Grid size={6}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Grid>
    </Grid>
  )
}

export default App
