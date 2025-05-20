import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Box, Grid } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('# hello');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <Grid container spacing={2} style={{ height: '100vh' }}>
      <Grid size={6} style={{ height: '100%' }}>
        <Box component="section" sx={{ p: 1, border: '1px solid #212121', borderRadius: '8px' }}>
          <TextareaAutosize
            value={markdown}
            onChange={handleChange}
            placeholder="Write your Markdown here..."
            style={{
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              resize: 'none',
              backgroundColor: '#212121',
              color: '#fafafa',
              outline: 'none',
              borderRadius: '8px',
              border: 'none'
            }}
          />
        </Box>
      </Grid>
      <Grid size={6} style={{ height: '100%', overflow: 'auto' }}>
        <Box component="section" sx={{ p: 1, border: '1px solid #212121', borderRadius: '8px', height: '100%' }}>
          <ReactMarkdown
            style={{
              borderRadius: '8px',
              height: '100%'
            }}
          >
            {markdown}
          </ReactMarkdown>
        </Box>
      </Grid>
    </Grid>
  )
}

export default App
