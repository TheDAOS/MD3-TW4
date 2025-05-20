import ReactMarkdown from 'react-markdown';
import { Box, Grid } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

function Body({ markdown, setMarkdown }) {

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    const boxStyle = { p: 1, border: '0px solid #212121', borderRadius: '8px' }

    const gridStyle = { height: '100%', overflow: 'auto' };

    const sideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        scrollBehavior: 'smooth',
    }

    return (
        <Grid container spacing={2} style={{ height: '90vh' }}>
            <Grid size={6} style={gridStyle}>
                <Box component="section" sx={boxStyle}>
                    <TextareaAutosize
                        value={markdown}
                        onChange={handleChange}
                        placeholder="Write your Markdown here..."
                        style={{
                            ...sideStyle,
                            boxSizing: 'border-box',
                            resize: 'none',
                            backgroundColor: '#212121',
                            color: '#fafafa',
                            outline: 'none',
                            border: 'none',
                        }}
                    />
                </Box>
            </Grid>
            <Grid size={6} style={gridStyle}>
                <Box component="section" sx={boxStyle}>
                    <ReactMarkdown
                        style={{
                            ...sideStyle,
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Body
