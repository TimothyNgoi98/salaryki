import React from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Card1 = () => {
    return(
        <Grid container pt={2} pb = {1}>
            <Card sx={{backgroundColor:'background.card', width:'95%', margin:'auto'}}>
                <Grid container direction='row' justifyContent="space-between">
                    <Grid item xs={9}>
                        <Box sx={{flexDirection:'column'}} ml = {1} p={1}>
                            <Typography variant='subtitle1'>Salary Rights</Typography>
                            <Typography variant='subtitle1'>বেতন অধিকার</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={3} align='center'>
                        <Box mt = {3}>
                            <PlayArrowIcon color="primary"/>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default Card1
