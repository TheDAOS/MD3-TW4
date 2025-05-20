import { Box, Button, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import SaveIcon from '@mui/icons-material/Save';

function NavBar({ markdown }) {

    const saveMarkdownToFile = () => {
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <AppBar position='static' sx={{ p: 1, px: 5 }}>
            <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                <Typography variant='h6'>
                    Markdown
                </Typography>

                <Button
                    variant="contained"
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    spacing={2}
                    onClick={saveMarkdownToFile}
                >
                    <SaveIcon fontSize='small' style={{ marginRight: "5px" }} />
                    Save
                </Button>
            </Stack>
        </AppBar>
    )
}

export default NavBar