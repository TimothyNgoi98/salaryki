import React from 'react'
// import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'

function NavBar() {
    return(
        <AppBar position='static' pb = {4}>
            <Toolbar disableGutters >
                <Box style={{ width: '100%' }} sx={{ display: 'flex', justifyContent: 'space-evenly', m: 1}}>
                    <Box sx={{flexDirection:'column'}}>
                        <Typography variant='subtitle1' align="center">Salary Rights</Typography>
                        <Typography variant='subtitle1'>বেতন অধিকার</Typography>
                    </Box>
                    <Box sx={{flexDirection:'column'}} >
                        <Typography variant='subtitle1' align="center">Get Help</Typography>
                        <Typography variant='subtitle1'>সাহায্য পান</Typography>
                    </Box>
                    <Box sx={{flexDirection:'column'}} >
                        <Typography variant='subtitle1' align="center">FAQ</Typography>
                        <Typography variant='subtitle1'>সচরাচর জিজ্ঞাস্য</Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar