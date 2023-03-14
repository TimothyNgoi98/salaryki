import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

const NavBar = () => {
    return(
        <AppBar position='static'>
            <Toolbar disableGutters >
                <Box style={{ width: '100%' }} sx={{ display: 'flex', justifyContent: 'space-evenly',m: 1}}>
                    <Box sx={{flexDirection:'column'}}>
                        <Typography variant='subtitle2' align="center">Salary Rights</Typography>
                        <Typography>বেতন অধিকার</Typography>
                    </Box>
                    <Box sx={{flexDirection:'column'}} >
                        <Typography variant='subtitle2' align="center">Get Help</Typography>
                        <Typography>সাহায্য পান</Typography>
                    </Box>
                    <Box sx={{flexDirection:'column'}} >
                        <Typography align="center" variant='subtitle2'>FAQ</Typography>
                        <Typography>সচরাচর জিজ্ঞাস্য</Typography>
                    </Box>
                </Box>
            </Toolbar>
            {/* <Grid container spacing={7} direction='row' justifyContent='space-evenly'>
                <Grid item>
                    Hello
                </Grid>
                <Grid item>
                    Hello
                </Grid>
                <Grid item>
                    Hello
                </Grid>
            </Grid> */}
        </AppBar>
    )
}

export default NavBar