import { Box, Button, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function NavBar() {
    return (
        <AppBar position='static' sx={{ p: 1.5 }}>
            <Stack direction="row" spacing={2} justifyContent='space-between' alignItems='center'>
                <Typography>
                    Markdown
                </Typography>

                <Button
                    variant="contained"
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    spacing={2}
                >
                    <SaveAltIcon fontSize='small' />
                    <Typography >
                        Save File
                    </Typography>
                </Button>
            </Stack>
        </AppBar>
    )
}

export default NavBar