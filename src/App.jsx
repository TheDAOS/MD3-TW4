import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor'
import { Grommet, Grid, Box } from 'grommet';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('');

  const theme = {
    global: {
      colors: {
        bg: '#000000',
      },
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
      },
    },
  };

  return (
    <Grommet full theme={theme} background='bg'>
      <Grid
        rows={['xxsmall', 'xsmall']}
        columns={['xsmall', 'small']}
        gap="small"
      >
        <Box><MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} /></Box>
        <Box background="light-5" ><ReactMarkdown>{markdown}</ReactMarkdown></Box>
      </Grid>

    </Grommet>
  )
}

export default App
